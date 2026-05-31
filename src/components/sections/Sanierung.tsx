'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ShieldAlert, FlaskConical, Hammer, FileText } from 'lucide-react';
import { useI18n } from '@/i18n/I18nProvider';
import { Button } from '@/components/ui/Button';

const ICONS = [ShieldAlert, FlaskConical, Hammer, FileText];

export function Sanierung() {
  const { t } = useI18n();
  return (
    <section
      id="sanierung"
      className="relative min-h-screen overflow-hidden bg-brand-red-dark lg:min-h-0"
    >
      <Image
        src="/asbest-santecgroup.webp"
        alt=""
        fill
        quality={85}
        sizes="100vw"
        className="object-cover object-right opacity-50"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-red-dark/95 via-brand-red-dark/70 to-brand-red-dark/40 lg:bg-gradient-to-r lg:from-brand-red-dark lg:via-brand-red-dark/80 lg:to-brand-red-dark/20" />

      <div className="relative flex min-h-screen flex-col px-5 py-14 md:px-8 lg:min-h-0 lg:grid lg:grid-cols-2 lg:items-center lg:py-24">
        <div className="flex flex-1 flex-col lg:block">
          <div>
            <span className="inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/80 sm:text-xs">
              <span className="h-px w-8 bg-white/60" /> {t.sanierung.eyebrow}
            </span>
            <h2 className="mt-3 whitespace-pre-line text-3xl font-bold leading-tight text-white sm:mt-4 sm:text-4xl md:text-5xl">
              {t.sanierung.title}
            </h2>
            <p className="mt-4 max-w-md text-sm text-white/80 sm:mt-5 sm:text-base">
              {t.sanierung.text}
            </p>
          </div>

          <div className="flex-1 lg:hidden" />

          <div>
            <ul className="mt-7 overflow-hidden rounded-xl border border-white/20 sm:mt-8">
              {t.sanierung.items.map((it, i) => {
                const Icon = ICONS[i] ?? ShieldAlert;
                return (
                  <li key={it} className="border-b border-white/10 last:border-0">
                    <div className="flex items-center gap-4 px-4 py-3.5">
                      <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-white/30 bg-white/5">
                        <Icon className="h-4 w-4 text-white" />
                      </span>
                      <span className="flex-1 text-[11px] font-semibold uppercase tracking-wider text-white">
                        {it}
                      </span>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="mt-8">
              <Link href="/sanierung">
                <Button variant="ghost" size="lg" className="w-full sm:w-auto">
                  {t.sanierung.cta}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
