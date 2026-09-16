'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import type { GtServiceBlock } from '@/lib/gebaeudetechnik-data';

export function ServiceBlockGallery({ blocks }: { blocks: GtServiceBlock[] }) {
  const [active, setActive] = useState<GtServiceBlock | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActive(null);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [active]);

  return (
    <>
      <div className="mt-10 space-y-4">
        {blocks.map((b) => (
          <div
            key={b.title}
            className="flex overflow-hidden rounded-xl border border-white/10 bg-bg-soft"
          >
            <button
              type="button"
              onClick={() => setActive(b)}
              aria-label={`${b.title} – Bild vergrössern`}
              className="relative h-auto w-28 shrink-0 cursor-zoom-in sm:w-40"
            >
              <Image
                src={b.image}
                alt={b.title}
                fill
                sizes="160px"
                className="object-cover transition duration-200 hover:brightness-110"
              />
            </button>
            <div className="flex flex-col justify-center px-4 py-4 sm:px-6">
              <h3 className="text-sm font-bold text-white sm:text-base">{b.title}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-white/70 sm:text-sm">
                {b.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-8"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            onClick={() => setActive(null)}
            aria-label="Schliessen"
            className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-6 sm:top-6"
          >
            <X className="h-5 w-5" />
          </button>
          <div
            className="relative h-full max-h-[85vh] w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={active.image}
              alt={active.title}
              fill
              sizes="90vw"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
