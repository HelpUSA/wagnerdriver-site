// components/EmailForm.tsx
'use client';

export default function EmailForm({
  to = 'wagnermrc@gmail.com',
  locale,
}: {
  to?: string;
  locale: 'en' | 'pt' | 'es';
}) {
  const t = {
    en: { name: 'Name', email: 'Your email', phone: 'Phone (optional)', msg: 'Message', send: 'Send via email' },
    pt: { name: 'Nome', email: 'Seu e-mail', phone: 'Telefone (opcional)', msg: 'Mensagem', send: 'Enviar por e-mail' },
    es: { name: 'Nombre', email: 'Tu correo', phone: 'Teléfono (opcional)', msg: 'Mensaje', send: 'Enviar por correo' },
  }[locale];

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const subject = 'Ride request';
    const lines = [
      `Name: ${fd.get('name') || ''}`,
      `Email: ${fd.get('email') || ''}`,
      `Phone: ${fd.get('phone') || ''}`,
      '',
      `${fd.get('message') || ''}`,
    ];
    const mailto = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`;
    window.location.href = mailto;
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3">
      <input name="name" placeholder={t.name} className="w-full rounded-xl bg-black/30 border border-white/10 px-4 py-3" required />
      <input name="email" type="email" placeholder={t.email} className="w-full rounded-xl bg-black/30 border border-white/10 px-4 py-3" required />
      <input name="phone" placeholder={t.phone} className="w-full rounded-xl bg-black/30 border border-white/10 px-4 py-3" />
      <textarea name="message" placeholder={t.msg} rows={5} className="w-full rounded-xl bg-black/30 border border-white/10 px-4 py-3" required />
      <button type="submit" className="w-full rounded-2xl bg-white text-black px-6 py-3 font-semibold">{t.send}</button>
    </form>
  );
}
