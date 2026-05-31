import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowLeft,
  CheckCircle2,
  Phone,
  Mail,
  ShieldAlert,
  FlaskConical,
  Hammer,
  FileText,
} from 'lucide-react';
import { company } from '@/lib/env';

export const metadata: Metadata = {
  title: 'Asbest- & Schadstoffsanierung – Santec Group',
  description:
    'Zertifizierter Schweizer Fachbetrieb für Asbestsanierung, Schadstoffsanierung, Rückbau und fachgerechte Entsorgung. Streng nach Suva-Richtlinien.',
};

const KOMPETENZEN = [
  {
    icon: ShieldAlert,
    heading: 'Asbestsanierung',
    intro:
      'Asbest ist in vielen Gebäuden mit Baujahr vor 1990 in Klebstoffen, Putzen, Bodenbelägen oder Isolationen zu finden. Wir übernehmen die sichere Sanierung im geschlossenen System (Unterdruckzonen).',
    points: [
      {
        title: 'Vollständige Sanierung',
        text: 'Fachgerechtes Entfernen von schwach- und festgebundenem Asbest aus allen Bauteilen.',
      },
      {
        title: 'Sicherheitszonen (Schleusensysteme)',
        text: 'Einrichtung von Unterdruckbereichen, damit keine gefährlichen Fasern in die Umgebung gelangen.',
      },
      {
        title: 'Luftmessung & Freigabe',
        text: 'Unabhängige Kontrollmessungen nach der Sanierung, um die Räume garantiert faserfrei und sicher zu übergeben.',
      },
    ],
  },
  {
    icon: FlaskConical,
    heading: 'Schadstoffsanierung (Altlasten)',
    intro:
      'Neben Asbest lauern in alten Gebäuden oft weitere gesundheitsgefährdende Stoffe wie PCB, PAK, Blei oder Schimmelpilze.',
    points: [
      {
        title: 'PCB- und PAK-Sanierung',
        text: 'Professionelle Entfernung von kontaminierten Fugendichtungen, Farben und Teerbelägen.',
      },
      {
        title: 'Schwermetallsanierung',
        text: 'Sicheres Abtragen von bleihaltigen Altanstrichen.',
      },
      {
        title: 'Schimmelpilzbekämpfung',
        text: 'Ursachenforschung und nachhaltige Beseitigung von Schimmelbefall für ein gesundes Raumklima.',
      },
    ],
  },
  {
    icon: Hammer,
    heading: 'Rückbau & Demontage',
    intro:
      'Ein sauberer Rückbau ist die Voraussetzung für jeden Neubau. Wir reissen nicht einfach nur ab – wir bauen selektiv und kontrolliert zurück.',
    points: [
      {
        title: 'Selektiver Rückbau',
        text: 'Gezielte Demontage einzelner Gebäudeteile, Hallen oder Innenbereiche unter maximaler Schonung der verbleibenden Bausubstanz.',
      },
      {
        title: 'Entkernung',
        text: 'Kompletter Rückbau aller nicht-tragenden Bauteile (Böden, Decken, Wände), um das Gebäude für eine umfassende Modernisierung vorzubereiten.',
      },
      {
        title: 'Erschütterungs- und Staubschutz',
        text: 'Einsatz modernster Techniken zur Minimierung von Lärm, Staub und Erschütterungen für die Nachbarschaft.',
      },
    ],
  },
  {
    icon: FileText,
    heading: 'Fachgerechte Entsorgung',
    intro:
      'Schadstoffe und Bauabfälle gehören nicht in die normale Deponie. Wir garantieren ein lückenloses Entsorgungsmanagement.',
    points: [
      {
        title: 'Abfalltrennung vor Ort',
        text: 'Konsequente Sortierung der Materialien direkt auf der Baustelle gemäss der Schweizer Verordnung (VVEA).',
      },
      {
        title: 'Sicherer Gefahrguttransport',
        text: 'Zertifizierter Transport von gefährlichen Abfällen (Sonderabfall) in zugelassenen Spezialbehältern.',
      },
      {
        title: 'Entsorgungsnachweise',
        text: 'Vollständige Dokumentation und Deklaration für Behörden und Bauherren, dass alle Stoffe umweltgerecht recycelt oder entsorgt wurden.',
      },
    ],
  },
];

const VORTEILE = [
  {
    title: 'Zertifizierte Sicherheit',
    text: 'Wir arbeiten strikt nach den strengen Vorgaben der Suva und der kantonalen Umweltämter.',
  },
  {
    title: 'Modernste Technik',
    text: 'Der Einsatz von Hochleistungsfiltern, Unterdruckgeräten und Schutzausrüstung ist für uns Standard.',
  },
  {
    title: 'Alles aus einer Hand',
    text: 'Von der ersten Schadstoffanalyse über den Rückbau bis hin zur finalen Entsorgungsdeklaration begleiten wir Ihr Projekt komplett.',
  },
];

export default function SanierungOverviewPage() {
  return (
    <>
      {/* top bar */}
      <header className="sticky top-0 z-40 w-full border-b border-white/5 bg-bg/90 backdrop-blur">
        <div className="mx-auto flex h-14 w-full max-w-7xl items-center gap-4 px-5 md:px-8">
          <Link
            href="/#sanierung"
            className="inline-flex items-center gap-1.5 text-sm text-white/60 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Zurück
          </Link>
          <span className="text-xs text-white/30">/</span>
          <span className="truncate text-sm text-white/80">Asbest- & Schadstoffsanierung</span>
        </div>
      </header>

      {/* hero */}
      <div className="relative overflow-hidden bg-brand-red-dark">
        <Image
          src="/asbest-santecgroup.webp"
          alt=""
          fill
          quality={85}
          sizes="100vw"
          className="object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-red-dark/90 to-brand-red-dark/70" />
        <Image
          src="/logo.santec.webp"
          alt="Santec Group"
          width={160}
          height={48}
          className="absolute right-5 top-6 z-10 h-10 w-auto brightness-0 invert opacity-90 md:right-8 md:top-8 md:h-12"
          priority
        />
        <div className="relative mx-auto w-full max-w-7xl px-5 py-14 md:px-8 md:py-20">
          <span className="inline-block rounded-full border border-white/30 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white/80">
            Asbest- & Schadstoffsanierung
          </span>
          <h1 className="mt-4 max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            Fachgerechte Asbestsanierung und Rückbau
          </h1>
          <p className="mt-5 max-w-2xl text-base text-white/80 sm:text-lg">
            Schadstoffsanierung: Sicherheit für Mensch und Umwelt.
          </p>
        </div>
      </div>

      <main className="bg-bg">
        {/* intro */}
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <p className="text-base leading-relaxed text-white/80 sm:text-lg">
                Alte Bausubstanz birgt oft unsichtbare Gefahren. Als zertifizierter und
                spezialisierter Fachbetrieb für Schadstoffsanierung packen wir dort an, wo höchste
                Vorsicht geboten ist. Wir befreien Gebäude von Asbest, Schadstoffen und Altlasten –
                absolut zuverlässig, streng nach den Schweizer gesetzlichen Vorschriften
                (Suva-Richtlinien) und mit modernster Sicherheitsausrüstung.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-white/60 sm:text-base">
                Ob private Liegenschaft, Gewerbebau oder Industrieareal: Wir sorgen für eine
                schadstofffreie Basis für Ihr Sanierungs- oder Rückbauprojekt.
              </p>

              {/* Kernkompetenzen */}
              <div className="mt-14">
                <h2 className="mb-8 text-2xl font-bold text-white sm:text-3xl">
                  Unsere Kernkompetenzen im Bereich Sanierung
                </h2>
                <div className="space-y-10">
                  {KOMPETENZEN.map((k) => {
                    const Icon = k.icon;
                    return (
                      <div
                        key={k.heading}
                        className="rounded-xl border border-white/10 bg-bg-soft p-6 sm:p-7"
                      >
                        <div className="mb-4 flex items-center gap-3">
                          <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-brand-red/40 bg-brand-red-dark/40">
                            <Icon className="h-5 w-5 text-brand-red" />
                          </span>
                          <h3 className="text-lg font-bold text-white sm:text-xl">{k.heading}</h3>
                        </div>
                        <p className="mb-4 text-sm leading-relaxed text-white/70 sm:text-base">
                          {k.intro}
                        </p>
                        <ul className="space-y-3">
                          {k.points.map((p) => (
                            <li key={p.title} className="flex items-start gap-3">
                              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" />
                              <span className="text-sm text-white/80">
                                <strong className="font-semibold text-white">{p.title}:</strong>{' '}
                                {p.text}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Warum wir */}
              <div className="mt-14">
                <h2 className="mb-2 text-2xl font-bold text-white sm:text-3xl">
                  Warum Sie Ihr Projekt uns anvertrauen sollten
                </h2>
                <ul className="mt-6 space-y-4">
                  {VORTEILE.map((v) => (
                    <li
                      key={v.title}
                      className="flex items-start gap-3 rounded-lg border border-white/10 bg-bg-soft p-4"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-red" />
                      <div>
                        <p className="font-semibold text-white">{v.title}</p>
                        <p className="mt-0.5 text-sm text-white/70">{v.text}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Final CTA */}
              <div className="mt-14 rounded-2xl border border-brand-red/40 bg-brand-red-dark/40 p-7 sm:p-9">
                <h3 className="text-xl font-bold text-white sm:text-2xl">
                  Planen Sie einen Umbau oder vermuten Sie Asbest in Ihrer Immobilie?
                </h3>
                <p className="mt-3 text-sm text-white/80 sm:text-base">
                  Gehen Sie kein Risiko ein. Kontaktieren Sie uns jetzt für eine professionelle
                  Beratung und ein sicheres Sanierungskonzept.
                </p>
                <a
                  href={`tel:${company.phone.replace(/\s+/g, '')}`}
                  className="mt-6 inline-flex items-center gap-2 rounded-md bg-brand-red px-5 py-3 text-sm font-semibold text-white transition hover:brightness-110"
                >
                  Kontaktieren Sie uns jetzt
                </a>
              </div>
            </div>

            {/* sidebar contact */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="rounded-xl border border-brand-red/30 bg-brand-red-dark/40 p-6">
                  <h3 className="mb-1 text-base font-bold text-white">Direkter Kontakt</h3>
                  <p className="mb-5 text-sm text-white/70">
                    Vermutung von Asbest oder Schadstoffen? Wir beraten Sie unverbindlich.
                  </p>
                  <a
                    href={`tel:${company.phone.replace(/\s+/g, '')}`}
                    className="mb-2 flex items-center gap-2 text-sm font-semibold text-white transition hover:text-white/80"
                  >
                    <Phone className="h-4 w-4 text-brand-red" />
                    {company.phone}
                  </a>
                  <a
                    href={`tel:${company.phoneSecondary.replace(/\s+/g, '')}`}
                    className="mb-3 flex items-center gap-2 text-sm font-semibold text-white transition hover:text-white/80"
                  >
                    <Phone className="h-4 w-4 text-brand-red" />
                    {company.phoneSecondary}
                  </a>
                  <a
                    href={`mailto:${company.email}`}
                    className="flex items-center gap-2 text-sm text-white/70 transition hover:text-white"
                  >
                    <Mail className="h-4 w-4 text-brand-red" />
                    {company.email}
                  </a>
                  <a
                    href={`tel:${company.phone.replace(/\s+/g, '')}`}
                    className="mt-5 block w-full rounded-md bg-brand-red px-4 py-3 text-center text-sm font-semibold text-white transition hover:brightness-110"
                  >
                    Anfrage senden
                  </a>
                </div>

                <div className="rounded-xl border border-white/10 bg-bg-soft p-6">
                  <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/50">
                    Zertifizierungen
                  </h3>
                  <ul className="space-y-2 text-sm text-white/80">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-brand-red" />
                      Suva-konform
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-brand-red" />
                      VVEA-konforme Entsorgung
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-brand-red" />
                      Swiss Made
                    </li>
                  </ul>
                </div>
              </div>
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
