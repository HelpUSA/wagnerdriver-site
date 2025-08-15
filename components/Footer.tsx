// components/Footer.tsx
import Link from 'next/link';
import Image from 'next/image';
import type { Locale } from '@/i18n/config';

const HELPUS_URL = 'https://helpusa.com.br';
const HELPUS_LOGO = '/img/helpus-logo.png';

const companyTexts: Record<Locale, { how: string; press: string; blog: string; green: string }> = {
  en: { how: 'How it works', press: 'Press', blog: 'Blog', green: 'Green initiatives' },
  pt: { how: 'Como funciona', press: 'Imprensa', blog: 'Blog', green: 'Iniciativas verdes' },
  es: { how: 'Cómo funciona', press: 'Prensa', blog: 'Blog', green: 'Iniciativas verdes' },
};

const builtByText: Record<Locale, string> = {
  en: 'Built by',
  pt: 'Desenvolvido pela',
  es: 'Desarrollado por',
};

export default function Footer({ dict, locale }: { dict: any; locale: Locale }) {
  const year = new Date().getFullYear();
  const m = dict.menu;
  const PHONE = '+12516778459';
  const EMAIL = 'wagnermrc@gmail.com';

  return (
    <footer className="mt-10 border-t border-white/10">
      <div className="container mx-auto px-6 py-10 grid md:grid-cols-3 gap-8 text-sm">
        {/* Empresa */}
        <div>
          <p className="font-semibold mb-2">{dict.footer.company}</p>
          <ul className="space-y-1 text-white/70">
            <li><Link href={`/${locale}/company/how-it-works`}>{companyTexts[locale].how}</Link></li>
            <li><Link href={`/${locale}/company/press`}>{companyTexts[locale].press}</Link></li>
            <li><Link href={`/${locale}/company/blog`}>{companyTexts[locale].blog}</Link></li>
            <li><Link href={`/${locale}/company/green-initiatives`}>{companyTexts[locale].green}</Link></li>
          </ul>
        </div>

        {/* Explorar */}
        <div>
          <p className="font-semibold mb-2">{dict.footer.explore}</p>
          <ul className="space-y-1 text-white/70">
            <li><Link href={`/${locale}/services/city-to-city-rides`}>{m.cityToCity}</Link></li>
            <li><Link href={`/${locale}/services/chauffeur-hailing`}>{m.hailing}</Link></li>
            <li><Link href={`/${locale}/services/airport-transfers`}>{m.airportTransfers}</Link></li>
            <li><Link href={`/${locale}/services/hourly-hire`}>{m.hourly}</Link></li>
            <li><Link href={`/${locale}/services/chauffeur-service`}>{m.chauffeurService}</Link></li>
            <li><Link href={`/${locale}/services/limousine-service`}>{m.limousine}</Link></li>
          </ul>
        </div>

        {/* Contato rápido visível */}
        <div>
          <p className="font-semibold mb-2">{locale === 'pt' ? 'Contato' : locale === 'es' ? 'Contacto' : 'Contact'}</p>
          <ul className="space-y-1 text-white/70">
            <li>📞 <a className="underline" href={`tel:${PHONE}`}>{PHONE}</a></li>
            <li>✉️ <a className="underline" href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
            <li><Link href={`/${locale}/contact`} className="underline">{locale === 'pt' ? 'Página de contato' : locale === 'es' ? 'Página de contacto' : 'Contact page'}</Link></li>
          </ul>
        </div>
      </div>

      {/* Direitos + crédito HelpUS com logo */}
      <div className="border-t border-white/10 py-6 text-center text-white/60 text-xs">
        <div>© {year} Wagner Driver — Gulf Shores, AL. {dict.footer.rights}</div>
        <a href={HELPUS_URL} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center justify-center gap-2 hover:text-white">
          <Image src={HELPUS_LOGO} alt="HelpUS" width={20} height={20} className="rounded-full" />
          <span>{builtByText[locale]} <strong>HelpUS</strong></span>
        </a>
      </div>
    </footer>
  );
}
