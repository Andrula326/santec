import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { CheckCircle2, ArrowLeft, Phone, Mail } from 'lucide-react';
import { GT_CATEGORIES, getCategory } from '@/lib/gebaeudetechnik-data';
import { company } from '@/lib/env';

export function generateStaticParams() {
  return GT_CATEGORIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const cat = getCategory(params.slug);
  if (!cat) return {};
  return {
    title: cat.title,
    description: cat.intro,
  };
}

export default function GebaeudetechnikDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const cat = getCategory(params.slug);
  if (!cat) notFound();

  return (
    <>
      {/* ── minimal top bar ── */}
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
          <span className="truncate text-sm text-white/80">{cat.title}</span>
        </div>
      </header>

      {/* ── hero ── */}
      <div className="relative overflow-hidden bg-brand-green-dark">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: `url('${cat.imageUrl}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-green-dark/90 to-brand-green-dark/70" />
        <Image
          src="/logo.santec.webp"
          alt="Santec Group"
          width={160}
          height={48}
          className="absolute right-5 top-6 z-10 h-10 w-auto brightness-0 invert opacity-90 md:right-8 md:top-8 md:h-12"
          priority
        />
        <div className="relative mx-auto w-full max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <span className="inline-block rounded-full border border-white/30 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white/80">
            Gebäudetechnik
          </span>
          <h1 className="mt-4 max-w-2xl text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            {cat.title}
          </h1>
          <p className="mt-4 max-w-xl text-base text-white/80 sm:text-lg">
            {cat.tagline}
          </p>
        </div>
      </div>

      <main className="bg-bg">
        {/* ── intro ── */}
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
            {/* left: intro + sections */}
            <div className="lg:col-span-3">
              <p className="text-base leading-relaxed text-white/80 sm:text-lg">
                {cat.intro}
              </p>

              <div className="mt-12 space-y-10">
                {cat.sections.map((s) => (
                  <div key={s.heading}>
                    <h2 className="mb-3 text-xl font-bold text-white sm:text-2xl">
                      {s.heading}
                    </h2>
                    <p className="text-sm leading-relaxed text-white/70 sm:text-base">
                      {s.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* right: feature list + contact card */}
            <div className="lg:col-span-2">
              <div className="sticky top-24 space-y-6">
                {/* features */}
                <div className="rounded-xl border border-white/10 bg-bg-soft p-6">
                  <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/50">
                    Leistungen
                  </h3>
                  <ul className="space-y-2">
                    {cat.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-white/80">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* contact card */}
                <div className="rounded-xl border border-brand-green/30 bg-brand-green-dark/40 p-6">
                  <h3 className="mb-1 text-base font-bold text-white">
                    Unverbindliche Beratung
                  </h3>
                  <p className="mb-5 text-sm text-white/70">
                    Egal ob Neubau, Modernisierung oder Zweitmeinung – wir beraten Sie gerne.
                  </p>
                  <a
                    href={`tel:${company.phone.replace(/\s+/g, '')}`}
                    className="mb-2 flex items-center gap-2 text-sm font-semibold text-white hover:text-white/80 transition"
                  >
                    <Phone className="h-4 w-4 text-brand-green" />
                    {company.phone}
                  </a>
                  <a
                    href={`tel:${company.phoneSecondary.replace(/\s+/g, '')}`}
                    className="mb-3 flex items-center gap-2 text-sm font-semibold text-white hover:text-white/80 transition"
                  >
                    <Phone className="h-4 w-4 text-brand-green" />
                    {company.phoneSecondary}
                  </a>
                  <a
                    href={`mailto:${company.email}`}
                    className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition"
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

        {/* ── other categories ── */}
        <div className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-5 py-12 md:px-8">
            <h2 className="mb-6 text-sm font-semibold uppercase tracking-wider text-white/50">
              Weitere Fachbereiche
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {GT_CATEGORIES.filter((c) => c.slug !== cat.slug).map((c) => (
                <Link
                  key={c.slug}
                  href={`/gebaeudetechnik/${c.slug}`}
                  className="group rounded-lg border border-white/10 bg-bg-soft p-5 transition hover:border-white/25"
                >
                  <p className="text-sm font-semibold text-white group-hover:text-brand-green transition">
                    {c.title}
                  </p>
                  <p className="mt-1 text-xs text-white/50">{c.tagline}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-white/10 bg-bg-soft py-6 text-center text-xs text-white/40">
        © {new Date().getFullYear()} {company.name} –{' '}
        <Link href="/impressum" className="hover:text-white transition">
          Impressum
        </Link>
      </footer>
    </>
  );
}
