// components/ContactFloating.tsx
'use client';

type Locale = 'en' | 'pt' | 'es';

export default function ContactFloating({
  phone = '+12516778459',
  sms = '+12516778459',
  email = 'wagnermrc@gmail.com',
  locale,
}: {
  phone?: string;
  sms?: string;
  email?: string;
  locale: Locale;
}) {
  const labels: Record<Locale, { wa: string; call: string; sms: string; mail: string; hi: string }> = {
    en: { wa: 'WhatsApp', call: 'Call', sms: 'SMS', mail: 'Email', hi: 'Hello, I would like a quote.' },
    pt: { wa: 'WhatsApp', call: 'Ligar', sms: 'SMS', mail: 'E-mail', hi: 'Olá, gostaria de um orçamento.' },
    es: { wa: 'WhatsApp', call: 'Llamar', sms: 'SMS', mail: 'Correo', hi: 'Hola, me gustaría una cotización.' },
  };

  const digits = phone.replace(/[^\d]/g, '');
  const waHref = `https://wa.me/${digits}?text=${encodeURIComponent(labels[locale].hi)}`;
  const telHref = `tel:${phone}`;
  const smsHref = `sms:${sms}`;
  const mailHref = `mailto:${email}?subject=${encodeURIComponent('Ride request')}`;

  const Item = ({
    href,
    title,
    children,
  }: {
    href: string;
    title: string;
    children: React.ReactNode;
  }) => (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="relative group w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shadow-lg ring-1 ring-white/20 hover:scale-105 transition-transform"
      aria-label={title}
      title={title}
    >
      {children}
      <span className="pointer-events-none absolute right-14 whitespace-nowrap rounded-lg bg-black/80 text-white/90 text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
        {title}
      </span>
    </a>
  );

  return (
    <div className="fixed z-[100] right-5 bottom-5 flex flex-col gap-3">
      <Item href={waHref} title={labels[locale].wa}>
        {/* WhatsApp SVG */}
        <svg viewBox="0 0 32 32" width="22" height="22" aria-hidden="true">
          <path fill="#25D366" d="M27.1 4.9A15 15 0 0 0 5.8 26.2L4 31l5-1.7A15 15 0 1 0 27.1 4.9z"></path>
          <path fill="#fff" d="M23.4 19.1c-.3-.2-1.9-.9-2.2-1s-.5-.2-.7.2-.8 1-1 1.2-.4.3-.7.1a10.6 10.6 0 0 1-3.1-1.9 11.5 11.5 0 0 1-2-2.5c-.2-.3 0-.5.2-.7l.5-.6c.2-.2.3-.4.4-.7s0-.5 0-.7 0-.6-.2-.9-.7-1.7-1-2.3-.6-.5-.8-.5h-.7a1.4 1.4 0 0 0-1 .5c-.3.3-1.2 1.2-1.2 3s1.2 3.4 1.3 3.6 2.3 3.6 5.5 5.1a18.7 18.7 0 0 0 1.9.7c.8.2 1.5.1 2 .1s1.9-.8 2.2-1.5.3-1.4.2-1.6-.2-.2-.5-.4z"></path>
        </svg>
      </Item>
      <Item href={telHref} title={labels[locale].call}>
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.11 5.18 2 2 0 0 1 5.1 3h3a2 2 0 0 1 2 1.72c.12.9.32 1.77.6 2.6a2 2 0 0 1-.45 2.11L9.1 10.9a16 16 0 0 0 4 4l1.5-1.15a2 2 0 0 1 2.11-.45c.83.28 1.7.48 2.6.6A2 2 0 0 1 22 16.92z" fill="currentColor"/>
        </svg>
      </Item>
      <Item href={smsHref} title={labels[locale].sms}>
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
          <path d="M21 15a2 2 0 0 1-2 2H8l-4 4V5a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2z" fill="currentColor"/>
        </svg>
      </Item>
      <Item href={mailHref} title={labels[locale].mail}>
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
          <path d="M4 4h16a2 2 0 0 1 2 2v1l-10 6L2 7V6a2 2 0 0 1 2-2zm0 6.5 8 4.8 8-4.8V18a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z" fill="currentColor"/>
        </svg>
      </Item>
    </div>
  );
}
