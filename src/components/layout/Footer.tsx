'use client';

import { Phone, Mail } from 'lucide-react';
import { useI18n } from '@/i18n/I18nProvider';
import { Logo } from '@/components/ui/Logo';
import { company } from '@/lib/env';

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  const navLinks = [
    { href: '#home', label: t.nav.home },
    { href: '#sanierung', label: t.nav.sanierung },
    { href: '#gebaeudetechnik', label: t.nav.gebaeudetechnik },
    { href: '#ueber-uns', label: t.nav.ueberUns },
    { href: '#kontakt', label: t.nav.kontakt },
  ];

  return (
    <footer className="border-t border-white/10 bg-bg-soft">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-5 py-14 md:grid-cols-3 md:px-8">
        <div>
          <Logo />
          <p className="mt-5 whitespace-pre-line text-sm text-white/60">
            {t.footer.tagline}
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/60">
            {t.footer.navigation}
          </h3>
          <ul className="space-y-2 text-sm text-white/80">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-white">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/60">
            {t.footer.kontakt}
          </h3>
          <address className="space-y-2 text-sm not-italic text-white/80">
            <div>{company.name}</div>
            <div>{company.street}</div>
            <div>{company.country}-{company.zip} {company.city}</div>
            <div className="flex items-center gap-2 pt-2">
              <Phone className="h-3.5 w-3.5 text-brand-green" />
              <a href={`tel:${company.phone.replace(/\s+/g, '')}`}>{company.phone}</a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-3.5 w-3.5 text-brand-green" />
              <a href={`tel:${company.phoneSecondary.replace(/\s+/g, '')}`}>{company.phoneSecondary}</a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-3.5 w-3.5 text-brand-green" />
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </div>
          </address>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-3 px-5 py-5 text-xs text-white/50 md:flex-row md:items-center md:px-8">
          <span>© {year} {company.name} – {t.footer.rights}</span>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a href="/impressum" className="hover:text-white">{t.footer.impressum}</a>
            <a href="/datenschutz" className="hover:text-white">{t.footer.datenschutz}</a>
            <span className="text-white/40">
              Made by{' '}
              <a
                href="https://andrzejmich.ch"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white"
              >
                Andrzej Mich
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
