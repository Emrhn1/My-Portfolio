// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Tüm alanları doldurunuz.' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Geçerli bir email adresi giriniz.' },
        { status: 400 }
      );
    }

    // Nodemailer transporter oluştur
    const transporter = nodemailer.createTransport({
      service: 'gmail', // veya başka bir email servisi
      auth: {
        user: process.env.EMAIL_USER, // Gmail adresiniz
        pass: process.env.EMAIL_PASS, // Gmail App Password
      },
      tls: {
        rejectUnauthorized: false, // SSL sertifika doğrulamasını devre dışı bırak
      },
    });

    // Email içeriği
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Mesajları kendi mailinize gönderin
      subject: `Portfolio İletişim: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3b82f6;">Yeni İletişim Mesajı</h2>
          <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>İsim:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Konu:</strong> ${subject}</p>
          </div>
          <div style="background: #ffffff; padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb;">
            <h3 style="color: #1f2937;">Mesaj:</h3>
            <p style="line-height: 1.6; color: #4b5563;">${message}</p>
          </div>
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 14px;">
              Bu mesaj portfolio sitenizden gönderildi.
            </p>
          </div>
        </div>
      `,
      replyTo: email, // Cevap vermek için gönderenin emaili
    };

    // Email gönder
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Mesaj başarıyla gönderildi!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email gönderim hatası:', error);
    return NextResponse.json(
      { error: 'Mesaj gönderilemedi. Lütfen tekrar deneyin.' },
      { status: 500 }
    );
  }
}