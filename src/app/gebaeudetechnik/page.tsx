import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, CheckCircle2, Phone, Mail, ArrowRight } from 'lucide-react';
import { GT_CATEGORIES } from '@/lib/gebaeudetechnik-data';
import { company } from '@/lib/env';

export const metadata: Metadata = {
  title: 'Gebäudetechnik – Leistungsspektrum',
  description:
    'HLKS-Engineering, Energieeffizienz, Betriebsoptimierungen und unabhängige Gutachten von Santec Group GmbH.',
};

const GENERAL_SECTIONS = [
  {
    heading: 'Planung und Konzeption gebäudetechnischer Anlagen',
    text: 'Der Grundstein für jedes erfolgreiche Bauvorhaben. Wir entwickeln massgeschneiderte und zukunftssichere Konzepte für die gesamte Haustechnik, exakt abgestimmt auf die spezifischen Anforderungen Ihres Gebäudes.',
  },
  {
    heading: 'Heizungsanlagen (Analyse, Optimierung, Konzepte)',
    text: 'Technisch hochentwickelte Heizsysteme für maximale Effizienz. Unser Fokus liegt auf der fundierten ingenieurtechnischen Planung, dem Systemdesign (z. B. Wärmepumpen, Fernwärme) und dem hydraulischen Abgleich für eine ressourcenschonende Wärmeverteilung.',
  },
  {
    heading: 'Energieeffizienz- und Betriebsoptimierungen (eBO)',
    text: 'Ihre Haustechnik kann mehr leisten. Wir analysieren bestehende HLKS-Anlagen im Detail, spüren versteckte Energiefresser auf und führen eine systematische Feinabstimmung der Systeme im laufenden Betrieb durch, um Ihre Energiekosten spürbar zu senken.',
  },
  {
    heading: 'Sanierungs- und Modernisierungskonzepte',
    text: 'Zukunftssichere Planung für bestehende Immobilien. Wir entwickeln herstellerunabhängige Strategien für den Heizungsersatz, die energetische Sanierung und die Dekarbonisierung (CO₂-Reduktion) Ihres Gebäudeparks.',
  },
  {
    heading: 'Koordination und Begleitung von Projekten',
    text: 'Alles im Griff von der Idee bis zur Übergabe. Wir übernehmen die fachliche Koordination aller beteiligten Gewerke, sichern die Qualitätsstandards und begleiten die finale Inbetriebsetzung der technischen Anlagen.',
  },
];

const GUTACHTEN_ITEMS = [
  'Mängel- & Schadensanalysen: Präzise Ursachenanalyse bei Systemausfällen, Fehlfunktionen, Schimmelbildung oder mangelhafter Leistung von Anlagen.',
  'Abnahme & Garantieprüfung: Technische Bauabnahme von installierten Anlagen. Wir prüfen rigoros, ob alle Arbeiten mängelfrei, vertragskonform und nach den geltenden SIA-Normen ausgeführt wurden.',
  'Zweitmeinungen (Second Opinion): Unabhängige Überprüfung von Sanierungskonzepten und Kostenvoranschlägen anderer Anbieter, um Sie vor teuren Fehlinvestitionen zu schützen.',
];

export default function GebaeudetechnikOverviewPage() {
  return (
    <>
      {/* top bar */}
      <header className="sticky top-0 z-40 w-full border-b border-white/5 bg-bg/90 backdrop-blur">
        <div className="mx-auto flex h-14 w-full max-w-7xl items-center gap-4 px-5 md:px-8">
          <Link
            href="/#gebaeudetechnik"
            className="inline-flex items-center gap-1.5 text-sm text-white/60 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Zurück
          </Link>
          <span className="text-xs text-white/30">/</span>
          <span className="truncate text-sm text-white/80">Gebäudetechnik</span>
        </div>
      </header>

      {/* hero */}
      <div className="relative bg-brand-green-dark">
        <Image
          src="/logo.santec.webp"
          alt="Santec Group"
          width={160}
          height={48}
          className="absolute right-5 top-6 h-10 w-auto brightness-0 invert opacity-90 md:right-8 md:top-8 md:h-12"
          priority
        />
        <div className="mx-auto w-full max-w-7xl px-5 py-14 md:px-8 md:py-20">
          <span className="inline-block rounded-full border border-white/30 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white/80">
            Gebäudetechnik
          </span>
          <h1 className="mt-4 max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            Unser Leistungsspektrum im Bereich Gebäudetechnik
          </h1>
          <p className="mt-5 max-w-2xl text-base text-white/80 sm:text-lg">
            Zukunftsorientierte Haustechnik: Planung, Beratung und Expertisen.
          </p>
        </div>
      </div>

      <main className="bg-bg">
        {/* intro */}
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <p className="text-base leading-relaxed text-white/80 sm:text-lg">
                Wir sind kein gewöhnlicher Installationsbetrieb. Als unabhängige Experten und
                HLKS-Ingenieure betrachten wir die gesamte Gebäudetechnik als ein vernetztes
                Gesamtsystem. Wir verkaufen keine Standardgeräte – wir planen, optimieren und
                kontrollieren Ihre Anlagen, damit sie absolut störungsfrei, energieeffizient und
                mit minimalen Betriebskosten laufen.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-white/60 sm:text-base">
                Egal, ob Sie einen Neubau planen, eine Modernisierung ins Auge fassen oder eine
                unabhängige Zweitmeinung eines Experten benötigen – wir bieten Ihnen professionelle
                ingenieurtechnische Unterstützung in jeder Projektphase.
              </p>

              {/* general sections */}
              <div className="mt-12 space-y-8">
                <h2 className="text-2xl font-bold text-white">
                  Comprehensive Gebäudetechnik-Engineering
                </h2>
                {GENERAL_SECTIONS.map((s) => (
                  <div key={s.heading} className="border-l-2 border-brand-green/50 pl-5">
                    <h3 className="mb-2 text-base font-bold text-white">{s.heading}</h3>
                    <p className="text-sm leading-relaxed text-white/70">{s.text}</p>
                  </div>
                ))}
              </div>

              {/* gutachten */}
              <div className="mt-14">
                <h2 className="mb-2 text-2xl font-bold text-white">
                  Technische Zustandsanalysen und Expertisen
                </h2>
                <p className="mb-6 text-sm leading-relaxed text-white/70">
                  Als zertifizierte, neutrale Gutachter erstellen wir fundierte und rechtssichere
                  technische Expertisen für Eigentümer, Liegenschaftsverwaltungen, Versicherungen
                  und Gerichte.
                </p>
                <ul className="space-y-4">
                  {GUTACHTEN_ITEMS.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-white/80">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* sidebar contact */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="rounded-xl border border-brand-green/30 bg-brand-green-dark/40 p-6">
                  <h3 className="mb-1 text-base font-bold text-white">
                    Unverbindliche Beratung
                  </h3>
                  <p className="mb-5 text-sm text-white/70">
                    Benötigen Sie eine unabhängige Expertise, ein Sanierungskonzept oder eine
                    energetische Betriebsoptimierung?
                  </p>
                  <a
                    href={`tel:${company.phone.replace(/\s+/g, '')}`}
                    className="mb-2 flex items-center gap-2 text-sm font-semibold text-white transition hover:text-white/80"
                  >
                    <Phone className="h-4 w-4 text-brand-green" />
                    {company.phone}
                  </a>
                  <a
                    href={`tel:${company.phoneSecondary.replace(/\s+/g, '')}`}
                    className="mb-3 flex items-center gap-2 text-sm font-semibold text-white transition hover:text-white/80"
                  >
                    <Phone className="h-4 w-4 text-brand-green" />
                    {company.phoneSecondary}
                  </a>
                  <a
                    href={`mailto:${company.email}`}
                    className="flex items-center gap-2 text-sm text-white/70 transition hover:text-white"
                  >
                    <Mail className="h-4 w-4 text-brand-green" />
                    {company.email}
                  </a>
                  <a
                    href={`tel:${company.phone.replace(/\s+/g, '')}`}
                    className="mt-5 block w-full rounded-md bg-brand-green px-4 py-3 text-center text-sm font-semibold text-bg transition hover:brightness-110"
                  >
                    Kontaktieren Sie uns jetzt
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* fachbereiche */}
        <div className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-5 py-12 md:px-8">
            <h2 className="mb-6 text-sm font-semibold uppercase tracking-wider text-white/50">
              Unsere Fachbereiche
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {GT_CATEGORIES.map((c) => (
                <Link
                  key={c.slug}
                  href={`/gebaeudetechnik/${c.slug}`}
                  className="group rounded-lg border border-white/10 bg-bg-soft p-5 transition hover:border-brand-green/40"
                >
                  <p className="text-sm font-semibold text-white transition group-hover:text-brand-green">
                    {c.title}
                  </p>
                  <p className="mt-1 text-xs text-white/50">{c.tagline}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs text-brand-green/70 group-hover:text-brand-green">
                    Mehr Info <ArrowRight className="h-3 w-3" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-white/10 bg-bg-soft py-6 text-center text-xs text-white/40">
        © {new Date().getFullYear()} {company.name} –{' '}
        <Link href="/impressum" className="transition hover:text-white">
          Impressum
        </Link>
      </footer>
    </>
  );
}
