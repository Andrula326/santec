'use client';

import Image from 'next/image';
import { useI18n } from '@/i18n/I18nProvider';
import { Button } from '@/components/ui/Button';

export function Hero() {
  const { t } = useI18n();
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-bg lg:min-h-[640px]"
    >
      <Image
        src="/gebaeudetechnik.webp"
        alt="Santec Group – Gebäudetechnik"
        fill
        priority
        quality={85}
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-bg/95 via-bg/70 to-bg/25 lg:bg-gradient-to-r lg:from-bg lg:via-bg/85 lg:to-bg/20" />

      <div className="relative flex min-h-screen flex-col px-5 py-16 md:px-8 lg:min-h-0 lg:block lg:py-28">
        <div className="mx-auto w-full max-w-7xl">
          <div className="max-w-2xl">
            <h1 className="whitespace-pre-line text-[1.875rem] font-bold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl">
              {t.hero.title}
            </h1>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70 sm:text-base">
              {t.hero.subtitle}
            </p>
            <div className="mt-8 hidden flex-col gap-3 sm:flex-row sm:flex-wrap lg:flex">
              <a href="#sanierung" className="w-full sm:w-auto">
                <Button variant="red" size="lg" className="w-full sm:w-auto">
                  {t.hero.ctaSanierung}
                </Button>
              </a>
              <a href="#gebaeudetechnik" className="w-full sm:w-auto">
                <Button variant="green" size="lg" className="w-full sm:w-auto">
                  {t.hero.ctaGebaeudetechnik}
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* spacer pushes buttons to bottom on mobile */}
        <div className="flex-1 lg:hidden" />

        {/* buttons — mobile only, pinned to bottom */}
        <div className="mx-auto w-full max-w-7xl pb-4 lg:hidden">
          <div className="flex flex-col gap-3">
            <a href="#sanierung" className="w-full">
              <Button variant="red" size="lg" className="w-full">
                {t.hero.ctaSanierung}
              </Button>
            </a>
            <a href="#gebaeudetechnik" className="w-full">
              <Button variant="green" size="lg" className="w-full">
                {t.hero.ctaGebaeudetechnik}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
