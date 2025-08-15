// components/Header.tsx
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

type Dict = any;
const locales = ['en', 'pt', 'es'] as const;
type Locale = typeof locales[number];

function switchPathLocale(pathname: string, target: Locale) {
  const parts = pathname.split('/').filter(Boolean);
  if (parts.length === 0) return `/${target}`;
  parts[0] = target;
  return '/' + parts.join('/');
}

export default function Header({ dict, locale }: { dict: Dict; locale: Locale }) {
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const pathname = usePathname();
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false);
    }
    function onEsc(e: KeyboardEvent) {
      if (e.key === 'Escape') setLangOpen(false);
    }
    document.addEventListener('mousedown', onDocClick);
    document.addEventListener('keydown', onEsc);
    return () => {
      document.removeEventListener('mousedown', onDocClick);
      document.removeEventListener('keydown', onEsc);
    };
  }, []);

  const t = dict.menu;
  const contactLabel = locale === 'pt' ? 'Contato' : locale === 'es' ? 'Contacto' : 'Contact';

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur border-b border-white/10 bg-black/60">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link href={`/${locale}`} className="font-bold tracking-wide">
          {dict.brand}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link className="hover:text-white/80" href={`/${locale}/services/city-to-city-rides`}>{t.cityToCity}</Link>
          <Link className="hover:text-white/80" href={`/${locale}/services/chauffeur-hailing`}>{t.hailing}</Link>
          <Link className="hover:text-white/80" href={`/${locale}/services/airport-transfers`}>{t.airportTransfers}</Link>
          <Link className="hover:text-white/80" href={`/${locale}/services/hourly-hire`}>{t.hourly}</Link>
          <Link className="hover:text-white/80" href={`/${locale}/services/chauffeur-service`}>{t.chauffeurService}</Link>
          <Link className="hover:text-white/80" href={`/${locale}/services/limousine-service`}>{t.limousine}</Link>
          <Link className="hover:text-white/80" href={`/${locale}/help`}>{t.help}</Link>
          <Link className="hover:text-white/80" href={`/${locale}/contact`}>{contactLabel}</Link>

          {/* Idiomas */}
          <div className="relative" ref={langRef}>
            <button className="hover:text-white/80" aria-expanded={langOpen} aria-haspopup="menu" onClick={() => setLangOpen((v) => !v)}>
              {t.language} ▾
            </button>
            <div className={clsx('absolute right-0 mt-2 w-40 rounded-xl border border-white/10 bg-black/95 p-2 z-[80] shadow-lg', langOpen ? 'block' : 'hidden')} role="menu">
              {locales.map((l) => (
                <Link
                  key={l}
                  href={switchPathLocale(pathname || '/', l)}
                  className={clsx('block rounded-lg px-3 py-2 hover:bg-white/5 cursor-pointer', l === locale && 'text-white/60')}
                  onClick={() => setLangOpen(false)}
                  role="menuitem"
                >
                  {l === 'en' ? 'English' : l === 'pt' ? 'Português' : 'Español'}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        {/* Mobile toggle */}
        <button className="md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          <Menu />
        </button>
      </div>

      {/* Mobile panel */}
      <div className={clsx('md:hidden border-t border-white/10 bg-black/90', open ? 'block' : 'hidden')}>
        <div className="px-6 py-4 space-y-3">
          <MobileLink href={`/${locale}/services/city-to-city-rides`}>{t.cityToCity}</MobileLink>
          <MobileLink href={`/${locale}/services/chauffeur-hailing`}>{t.hailing}</MobileLink>
          <MobileLink href={`/${locale}/services/airport-transfers`}>{t.airportTransfers}</MobileLink>
          <MobileLink href={`/${locale}/services/hourly-hire`}>{t.hourly}</MobileLink>
          <MobileLink href={`/${locale}/services/chauffeur-service`}>{t.chauffeurService}</MobileLink>
          <MobileLink href={`/${locale}/services/limousine-service`}>{t.limousine}</MobileLink>
          <MobileLink href={`/${locale}/help`}>{t.help}</MobileLink>
          <MobileLink href={`/${locale}/contact`}>{contactLabel}</MobileLink>

          <div className="pt-2 border-t border-white/10 flex gap-3">
            {locales.map((l) => (
              <Link key={l} className="rounded-lg px-3 py-2 bg-white/5" href={switchPathLocale(pathname || '/', l)} onClick={() => setOpen(false)}>
                {l.toUpperCase()}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

function MobileLink({ href, children }: any) {
  return (
    <Link href={href} className="block rounded-lg px-3 py-2 hover:bg-white/5">
      {children}
    </Link>
  );
}
