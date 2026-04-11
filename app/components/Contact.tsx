'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useTranslations } from 'next-intl';
import { Mail, Phone, MapPin, Clock, Send, Loader2, CheckCircle2, XCircle } from 'lucide-react';

// ── Zod schema ────────────────────────────────────────────────────────────────
const schema = z.object({
  name:    z.string().min(2, 'En az 2 karakter').max(80),
  email:   z.string().email('Geçerli bir e-posta girin'),
  subject: z.string().min(3, 'En az 3 karakter').max(120),
  message: z.string().min(10, 'En az 10 karakter').max(2000),
});
type FormValues = z.infer<typeof schema>;

// ── Terminal prompt input ─────────────────────────────────────────────────────
function TerminalField({
  prompt,
  error,
  children,
}: {
  prompt: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="group">
      <div
        className={[
          'flex items-start gap-2 rounded border px-3 py-2.5 transition-colors duration-150',
          'bg-terminal-green/[0.03] font-[family-name:var(--font-space-mono)]',
          error
            ? 'border-red-500/40 focus-within:border-red-500/70'
            : 'border-terminal-green/20 focus-within:border-terminal-green/50',
        ].join(' ')}
      >
        <span className="text-terminal-green text-xs mt-[3px] flex-shrink-0 select-none">
          {prompt}&gt;
        </span>
        {children}
      </div>
      {error && (
        <p className="mt-1 ml-1 text-[10px] text-red-400 font-[family-name:var(--font-space-mono)]">
          [ERR] {error}
        </p>
      )}
    </div>
  );
}

// ── Input / Textarea shared style ─────────────────────────────────────────────
const fieldClass =
  'flex-1 bg-transparent text-xs text-[var(--fg)] placeholder:text-[var(--muted)]/50 outline-none caret-terminal-green';

// ── Contact info cards ────────────────────────────────────────────────────────
const contactInfo = [
  { icon: Mail,   label: 'email',   value: 'oyuncut80@gmail.com',    href: 'mailto:oyuncut80@gmail.com' },
  { icon: Phone,  label: 'phone',   value: '+90 536 793 6456',       href: 'tel:+905367936456' },
  { icon: MapPin, label: 'location',value: 'İstanbul, Türkiye',      href: '#' },
] as const;

// ── Main component ────────────────────────────────────────────────────────────
export default function Contact() {
  const t = useTranslations('contact');
  const [status, setStatus] = useState<'idle' | 'ok' | 'err'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    setStatus('idle');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus('ok');
        reset();
      } else {
        setStatus('err');
      }
    } catch {
      setStatus('err');
    }
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 sm:px-6 font-[family-name:var(--font-space-mono)]"
    >
      <div className="max-w-6xl mx-auto">

        {/* Terminal header */}
        <div className="mb-10">
          <p className="text-xs text-[var(--muted)] mb-3">
            <span className="text-terminal-green">emirhan@dev</span>
            <span>:~$&nbsp;</span>
            <span className="text-[var(--fg)]">./contact --open</span>
          </p>
          <p className="text-[11px] tracking-[0.3em] text-terminal-green uppercase mb-2">
            {t('label')}
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--fg)]">{t('title')}</h2>
          <p className="text-sm text-[var(--muted)] mt-2 max-w-xl">{t('subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-[5fr_7fr] gap-8">

          {/* Left — info cards */}
          <div className="flex flex-col gap-3">
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                className="flex items-center gap-3 p-4 rounded-lg border border-terminal-green/20
                           bg-terminal-green/[0.03] hover:border-terminal-green/40
                           hover:bg-terminal-green/[0.07] transition-all duration-200 group"
              >
                <div className="w-8 h-8 rounded border border-terminal-green/25 flex items-center justify-center
                                group-hover:border-terminal-green/50 transition-colors flex-shrink-0">
                  <Icon size={14} className="text-terminal-green" />
                </div>
                <div>
                  <p className="text-[10px] text-[var(--muted)] uppercase tracking-widest mb-0.5">{label}</p>
                  <p className="text-xs text-[var(--fg)]">{value}</p>
                </div>
              </a>
            ))}

            {/* Working hours */}
            <div className="p-4 rounded-lg border border-terminal-green/20 bg-terminal-green/[0.03] mt-1">
              <div className="flex items-center gap-2 mb-3">
                <Clock size={13} className="text-terminal-green" />
                <span className="text-[10px] uppercase tracking-widest text-terminal-green">
                  {t('workingHours')}
                </span>
              </div>
              <p className="text-xs text-[var(--muted)]">{t('workingHoursValue')}</p>
              <div className="mt-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-terminal-green animate-pulse" />
                <span className="text-[10px] text-[var(--muted)]">
                  {t('responseTime')}: <span className="text-terminal-green">{t('responseTimeValue')}</span>
                </span>
              </div>
            </div>
          </div>

          {/* Right — terminal form */}
          <div className="rounded-lg border border-terminal-green/20 overflow-hidden">

            {/* Terminal chrome */}
            <div className="flex items-center gap-2 px-4 py-2.5 bg-terminal-green/5 border-b border-terminal-green/20">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#28ca41]" />
              </div>
              <span className="text-[10px] text-[var(--muted)] ml-2 truncate">
                ~/contact$ send-message
              </span>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="p-5 flex flex-col gap-4 bg-[var(--card-bg)]"
            >
              {/* name + email row */}
              <div className="grid sm:grid-cols-2 gap-4">
                <TerminalField prompt={t('name')} error={errors.name?.message}>
                  <input
                    {...register('name')}
                    placeholder="Emirhan"
                    autoComplete="name"
                    className={fieldClass}
                  />
                </TerminalField>
                <TerminalField prompt={t('email')} error={errors.email?.message}>
                  <input
                    {...register('email')}
                    type="email"
                    placeholder="emirhan@dev.io"
                    autoComplete="email"
                    className={fieldClass}
                  />
                </TerminalField>
              </div>

              {/* subject */}
              <TerminalField prompt={t('subject')} error={errors.subject?.message}>
                <input
                  {...register('subject')}
                  placeholder="İş teklifi, freelance..."
                  className={fieldClass}
                />
              </TerminalField>

              {/* message */}
              <TerminalField prompt={t('message')} error={errors.message?.message}>
                <textarea
                  {...register('message')}
                  rows={6}
                  placeholder="Mesajınızı buraya yazın..."
                  className={`${fieldClass} resize-none leading-relaxed`}
                />
              </TerminalField>

              {/* Status messages */}
              {status === 'ok' && (
                <div className="flex items-center gap-2 px-3 py-2.5 rounded border border-terminal-green/40
                                bg-terminal-green/10 text-terminal-green text-xs">
                  <CheckCircle2 size={13} />
                  <span><span className="font-bold">[OK]</span>&nbsp;{t('successMessage')}</span>
                </div>
              )}
              {status === 'err' && (
                <div className="flex items-center gap-2 px-3 py-2.5 rounded border border-red-500/40
                                bg-red-500/10 text-red-400 text-xs">
                  <XCircle size={13} />
                  <span><span className="font-bold">[ERR]</span>&nbsp;{t('errorMessage')}</span>
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center justify-center gap-2 py-2.5 rounded border
                           border-terminal-green/40 bg-terminal-green/10 text-terminal-green text-xs
                           hover:bg-terminal-green/20 hover:border-terminal-green/60
                           disabled:opacity-50 disabled:cursor-not-allowed
                           transition-all duration-200"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={13} className="animate-spin" />
                    {t('sending')}
                  </>
                ) : (
                  <>
                    <Send size={13} />
                    {t('send')}
                    <span className="text-[10px] opacity-60 ml-1">↵</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
