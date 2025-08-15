'use client';

export type Locale = 'en' | 'pt' | 'es';

export const companySlugs = [
  'how-it-works',
  'press',
  'blog',
  'green-initiatives',
] as const;

export default function CompanyPage({
  slug,
  locale,
}: {
  slug: (typeof companySlugs)[number] | string;
  locale: Locale;
}) {
  switch (slug) {
    case 'how-it-works':
      return <HowItWorks locale={locale} />;
    case 'press':
      return <Press locale={locale} />;
    case 'blog':
      return <Blog locale={locale} />;
    case 'green-initiatives':
      return <Green locale={locale} />;
    default:
      return (
        <main className="container mx-auto px-6 pt-24 pb-16">
          <h1 className="text-3xl font-semibold">404</h1>
          <p className="text-white/70">Page not found.</p>
        </main>
      );
  }
}

function HowItWorks({ locale }: { locale: Locale }) {
  const t =
    {
      en: {
        title: 'How it works',
        p1: 'Simple direct booking by phone, SMS, or email.',
        p2: 'Transparent distance-based pricing with confirmations sent to you.',
      },
      pt: {
        title: 'Como funciona',
        p1: 'Reserva direta por telefone, SMS ou e-mail.',
        p2: 'Preço por distância com confirmação enviada para você.',
      },
      es: {
        title: 'Cómo funciona',
        p1: 'Reserva directa por teléfono, SMS o correo.',
        p2: 'Precios por distancia con confirmación enviada.',
      },
    }[locale] ?? ({} as any);

  return (
    <main className="container mx-auto px-6 pt-24 pb-16">
      <h1 className="text-4xl font-bold mb-4">{t.title}</h1>
      <p className="text-white/75 mb-3">{t.p1}</p>
      <p className="text-white/75">{t.p2}</p>
    </main>
  );
}

function Press({ locale }: { locale: Locale }) {
  const title = { en: 'Press', pt: 'Imprensa', es: 'Prensa' }[locale];
  return (
    <main className="container mx-auto px-6 pt-24 pb-16">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="text-white/75">Media: booking@wagnerdriver.com</p>
    </main>
  );
}

function Blog({ locale }: { locale: Locale }) {
  const title = { en: 'Blog', pt: 'Blog', es: 'Blog' }[locale];
  return (
    <main className="container mx-auto px-6 pt-24 pb-16">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="text-white/75">Posts coming soon.</p>
    </main>
  );
}

function Green({ locale }: { locale: Locale }) {
  const t =
    {
      en: {
        title: 'Green initiatives',
        p: 'We minimize detours and idling and keep the vehicle well-maintained.',
      },
      pt: {
        title: 'Iniciativas verdes',
        p: 'Minimizamos desvios e marcha lenta e mantemos o veículo eficiente.',
      },
      es: {
        title: 'Iniciativas verdes',
        p: 'Minimizamos desvíos y ralentí y mantenemos el vehículo eficiente.',
      },
    }[locale] ?? ({} as any);

  return (
    <main className="container mx-auto px-6 pt-24 pb-16">
      <h1 className="text-4xl font-bold mb-4">{t.title}</h1>
      <p className="text-white/75">{t.p}</p>
    </main>
  );
}
