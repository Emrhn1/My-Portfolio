// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,           // STARTTLS portu
  secure: false,       // 587'de TLS bağlantı sırasında yükseltilir
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    ciphers: 'TLS_AES_256_GCM_SHA384',
    rejectUnauthorized: false, // dev’de kalabilir, prod’da kaldırabilirsin
  },
  connectionTimeout: 10000,
  greetingTimeout: 10000,
  socketTimeout: 10000,
});

async function verifyTurnstile(token: string, ip: string | null): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    console.error('[Turnstile] TURNSTILE_SECRET_KEY is not set');
    return false;
  }
  const body = new URLSearchParams({
    secret,
    response: token,
    ...(ip ? { remoteip: ip } : {}),
  });
  const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    body,
  });
  const data = await res.json() as { success: boolean; 'error-codes'?: string[] };
  if (!data.success) {
    console.error('[Turnstile] verification failed:', data['error-codes']);
  }
  return data.success;
}

export async function POST(request: Request) {
  try {
    const { name, email, subject, message, cfToken } = await request.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Lütfen tüm alanları doldurun.' },
        { status: 400 }
      );
    }

    if (!cfToken) {
      return NextResponse.json(
        { error: 'Captcha doğrulaması gerekli.' },
        { status: 400 }
      );
    }

    const ip = request.headers.get('cf-connecting-ip') ?? request.headers.get('x-forwarded-for');
    const valid = await verifyTurnstile(cfToken, ip);
    if (!valid) {
      return NextResponse.json(
        { error: 'Captcha doğrulaması başarısız.' },
        { status: 400 }
      );
    }

    const mailOptions = {
      from: `"Portfolio Formu" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `Portfolio İletişim: ${subject}`,
      html: `
        <h2>Yeni mesaj</h2>
        <p><strong>Adı:</strong> ${name}</p>
        <p><strong>E-posta:</strong> ${email}</p>
        <p><strong>Konu:</strong> ${subject}</p>
        <p><strong>Mesaj:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Mesajınız başarıyla gönderildi!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('[/api/contact] error:', error);
    const message = error instanceof Error ? error.message : 'unknown';
    return NextResponse.json(
      { error: 'Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.', detail: message },
      { status: 500 }
    );
  }
}