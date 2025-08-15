// app/[locale]/layout.tsx
import type { ReactNode } from 'react';
import type { Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/get-dictionary';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactFloating from '@/components/ContactFloating';

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'pt' }, { locale: 'es' }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: Locale };
}) {
  const dict = await getDictionary(params.locale);

  // contatos fixos (EUA)
  const PHONE = '+12516778459';
  const SMS = '+12516778459';
  const EMAIL = 'wagnermrc@gmail.com';

  return (
    <div className="min-h-screen flex flex-col">
      <Header dict={dict} locale={params.locale} />
      <div className="flex-1">{children}</div>
      <Footer dict={dict} locale={params.locale} />

      {/* Botões flutuantes de contato (sempre no canto inferior direito) */}
      <ContactFloating
        phone={PHONE}
        sms={SMS}
        email={EMAIL}
        locale={params.locale}
      />
    </div>
  );
}
