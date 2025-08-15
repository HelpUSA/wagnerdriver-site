import Image from 'next/image';
import Link from 'next/link';
import type { Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/get-dictionary';

const PHONE = '+1-251-000-0000';
const SMS = '+1-251-000-0000';
const EMAIL = 'booking@wagnerdriver.com';

export default async function Home({ params }: { params: { locale: Locale } }) {
  const dict = await getDictionary(params.locale);
  const t = dict.hero;
  const a = dict.areas;
  const feats = dict.features as Array<{title:string,desc:string}>;

  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden pt-24">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <Image src="/img/image01.png" alt="" fill priority sizes="100vw" className="object-cover opacity-40" />
        </div>
        <div className="relative container mx-auto px-6 py-20">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">{t.title}</h1>
          <p className="mt-4 text-lg md:text-xl text-white/80 max-w-3xl">{t.subtitle}</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a className="inline-flex items-center rounded-2xl bg-white text-black px-5 py-3 font-semibold" href={`tel:${PHONE}`}>{t.callNow}</a>
            <a className="inline-flex items-center rounded-2xl border border-white/30 px-5 py-3" href={`sms:${SMS}`}>{t.sms}</a>
            <a className="inline-flex items-center rounded-2xl border border-white/30 px-5 py-3" href={`mailto:${EMAIL}`}>{t.email}</a>
          </div>

          {/* Quick quote (UI only) */}
          <form className="mt-10 grid md:grid-cols-4 gap-3 bg-white/10 border border-white/10 rounded-2xl p-4 backdrop-blur" role="search" aria-label="Quick quote">
            <input className="rounded-xl bg-black/30 border border-white/10 px-4 py-3" placeholder={t.from} />
            <input className="rounded-xl bg-black/30 border border-white/10 px-4 py-3" placeholder={t.to} />
            <input type="date" className="rounded-xl bg-black/30 border border-white/10 px-4 py-3" />
            <button type="button" className="rounded-2xl bg-white text-black px-6 font-semibold flex items-center justify-center">{t.search}</button>
          </form>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-6 py-14 grid md:grid-cols-3 gap-6">
        {feats.map((f, i) => (
          <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-xl font-semibold">{f.title}</p>
            <p className="text-white/70 mt-2">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* About / Areas */}
      <section className="container mx-auto px-6 pb-20 grid md:grid-cols-2 gap-8 items-center">
        <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden border border-white/10">
          <Image src="/img/image02.png" alt="Driver helping with luggage" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
        </div>
        <div>
          <h2 className="text-3xl font-bold">{a.heading}</h2>
          <p className="text-white/75 mt-3">{a.desc}</p>
          <div className="mt-4 flex gap-3">
            <Link className="rounded-2xl border border-white/20 px-4 py-2" href={`/${params.locale}/services/airport-transfers`}>{a.airportTransfers}</Link>
            <Link className="rounded-2xl border border-white/20 px-4 py-2" href={`/${params.locale}/services/hourly-hire`}>{a.hourlyHire}</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
