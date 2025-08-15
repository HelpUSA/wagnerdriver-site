'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, MessageSquareText, Mail, ArrowRight } from 'lucide-react';

const PHONE = '+1-251-000-0000';
const SMS = '+1-251-000-0000';
const EMAIL = 'booking@wagnerdriver.com';

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden pt-24">
        <div className="absolute inset-0">
          <Image src="/img/image01.png" alt="Private car service" fill className="object-cover opacity-40" />
        </div>
        <div className="relative container mx-auto px-6 py-20">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Chauffeur Service in Gulf Shores</h1>
          <p className="mt-4 text-lg md:text-xl text-white/80 max-w-3xl">
            Airport transfers (GUF/PNS/MOB), hourly hire, and city-to-city rides. Book easily — quickest response by phone or SMS.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a className="inline-flex items-center rounded-2xl bg-white text-black px-5 py-3 font-semibold" href={`tel:${PHONE}`}>
              <Phone className="mr-2 h-5 w-5" /> Call now
            </a>
            <a className="inline-flex items-center rounded-2xl border border-white/30 px-5 py-3" href={`sms:${SMS}`}>
              <MessageSquareText className="mr-2 h-5 w-5" /> SMS
            </a>
            <a className="inline-flex items-center rounded-2xl border border-white/30 px-5 py-3" href={`mailto:${EMAIL}`}>
              <Mail className="mr-2 h-5 w-5" /> Email
            </a>
          </div>

          {/* Quick quote (UI only) */}
          <form className="mt-10 grid md:grid-cols-4 gap-3 bg-white/10 border border-white/10 rounded-2xl p-4 backdrop-blur">
            <input className="rounded-xl bg-black/30 border border-white/10 px-4 py-3" placeholder="From (address / airport)" />
            <input className="rounded-xl bg-black/30 border border-white/10 px-4 py-3" placeholder="To (address / airport)" />
            <input type="date" className="rounded-xl bg-black/30 border border-white/10 px-4 py-3" />
            <button className="rounded-2xl bg-white text-black px-6 font-semibold flex items-center justify-center">
              Search <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </form>
        </div>
      </section>

      {/* Feature cards */}
      <section className="container mx-auto px-6 py-14 grid md:grid-cols-3 gap-6">
        {[
          { title: 'Competitive rates', desc: 'Distance-based pricing that is fair and transparent.' },
          { title: 'Seamless travel', desc: 'Complimentary wait time for airport pickups and flight tracking.' },
          { title: 'Flexible scheduling', desc: 'Easy changes and clear communication via phone or SMS.' },
        ].map((f, i) => (
          <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-xl font-semibold">{f.title}</p>
            <p className="text-white/70 mt-2">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* About / Local areas */}
      <section className="container mx-auto px-6 pb-20 grid md:grid-cols-2 gap-8 items-center">
        <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden border border-white/10">
          <Image src="/img/image02.png" alt="Driver helping with luggage" fill className="object-cover" />
        </div>
        <div>
          <h2 className="text-3xl font-bold">Professional private car in Coastal Alabama</h2>
          <p className="text-white/75 mt-3">Serving Gulf Shores, Orange Beach, Foley, Fairhope, Mobile (AL) and Pensacola (FL). Airport transfers to GUF, PNS and MOB, city-to-city rides, and hourly hire for errands or events.</p>
          <div className="mt-4 flex gap-3">
            <Link className="rounded-2xl border border-white/20 px-4 py-2" href="/services/airport-transfers">Airport transfers</Link>
            <Link className="rounded-2xl border border-white/20 px-4 py-2" href="/services/hourly-hire">Hourly hire</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
