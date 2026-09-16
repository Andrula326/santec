export type GtSection = { heading: string; text: string };

export type GtServiceBlock = { title: string; text: string; image: string };

export type GtCategory = {
  slug: string;
  title: string;
  tagline: string;
  heroTitle?: string;
  heroSubtitle?: string;
  imageUrl: string;
  intro: string;
  features: string[];
  serviceBlocks?: GtServiceBlock[];
  sections: GtSection[];
};

export const GT_CATEGORIES: GtCategory[] = [
  {
    slug: 'lueftung-klima',
    title: 'Lüftung & Klima',
    tagline: 'Frische Luft. Perfekte Raumtemperatur.',
    heroTitle: 'Lüftung, Klima & Kälte – Planung, Lieferung, Montage und Service aus einer Hand.',
    heroSubtitle: 'Individuelle Lösungen für Gewerbe, Industrie, Gastronomie und private Projekte.',
    imageUrl:
      'https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=1600&q=80',
    intro:
      'Frische Luft und die perfekte Raumtemperatur ohne unnötigen Energieverlust. Wir projektieren und prüfen Lüftungssysteme, Klimaanlagen sowie industrielle Kälteanlagen für Wohn-, Gewerbe- und Industriebauten inklusive präziser Luftmengenmessung und Hygienekontrollen.',
    features: [
      'Lüftungssysteme (KVS / WRG)',
      'Klimaanlagen & Split-Systeme',
      'Industrielle Kälteanlagen',
      'Luftmengenmessung & Regulierung',
      'Hygienekontrollen nach SIA',
      'Energieoptimierung Lüftung',
    ],
    serviceBlocks: [
      {
        title: 'Lüftungsanlagen – Neubau, Ersatz & Sanierung',
        text: 'Planung und Realisierung neuer Lüftungsanlagen sowie Ersatz, Umbau, Erweiterung und Sanierung bestehender Anlagen – inklusive Lieferung, Montage, Inbetriebnahme und Einregulierung.',
        image: '/klima.webp',
      },
      {
        title: 'Klimaanlagen – Lieferung & Montage',
        text: 'Split-, Multi-Split- und professionelle Klimasysteme für Gewerbe, Gastronomie, Industrie und private Anwendungen. Beratung, Auslegung, Lieferung, Installation und Inbetriebnahme aus einer Hand.',
        image: '/klima.wohnung.webp',
      },
      {
        title: 'Gastro- & Küchenlüftung',
        text: 'Professionelle Zu- und Abluftlösungen sowie Küchenabluft für Restaurants, Hotels, Take-aways und Produktionsküchen. Neubau, Umbau, Ersatz, Optimierung und Service.',
        image: '/klima.kuche.webp',
      },
      {
        title: 'Kälte & Weinkellerkühlung',
        text: 'Individuelle Kälte- und Klimatisierungslösungen für Gewerbe, Gastronomie, Industrie und private Weinlager und Weinkeller – von der Auslegung über die Lieferung bis zur fertigen Anlage.',
        image: '/klima.wine.webp',
      },
    ],
    sections: [
      {
        heading: 'Planung, Lieferung, Montage und Service aus einer Hand',
        text: 'Die SANTEC GROUP plant, liefert und installiert individuelle Lüftungs-, Klima- und Kälteanlagen. Von der technischen Beratung und Auslegung über die Lieferung der Geräte und Komponenten bis zur fachgerechten Montage, Inbetriebnahme und Wartung erhalten Sie bei uns die komplette Lösung aus einer Hand.',
      },
      {
        heading: 'Planung und Konzeption',
        text: 'Wir entwickeln massgeschneiderte und zukunftssichere Konzepte für Lüftungs- und Klimasysteme, exakt abgestimmt auf die spezifischen Anforderungen Ihres Gebäudes – von der einfachen Wohnraumlüftung bis zur komplexen industriellen Klimatisierung.',
      },
      {
        heading: 'Energieeffizienz- und Betriebsoptimierungen (eBO)',
        text: 'Ihre Lüftungs- und Klimaanlage kann mehr leisten. Wir analysieren bestehende HLKS-Anlagen im Detail, spüren versteckte Energiefresser auf und führen eine systematische Feinabstimmung der Systeme im laufenden Betrieb durch, um Ihre Energiekosten spürbar zu senken.',
      },
      {
        heading: 'Unabhängige Gutachten und Expertisen',
        text: 'Als zertifizierte, neutrale Gutachter erstellen wir fundierte und rechtssichere technische Expertisen. Präzise Ursachenanalyse bei Systemausfällen, Fehlfunktionen oder mangelhafter Leistung von Lüftungs- und Kälteanlagen.',
      },
      {
        heading: 'Lüftungsreinigung – Industrie und Gewerbe',
        text: 'Lüftungsanlagen in Industrie- und Gewerbebetrieben laufen oft im Dauerbetrieb und sind extremen Belastungen ausgesetzt. Eine regelmässige, fachgerechte Reinigung sichert den reibungslosen Ablauf Ihrer Produktion, schützt Ihre Maschinen vor Überhitzung und sorgt für ein gesundes Arbeitsklima.',
      },
      {
        heading: 'Lüftungsreinigung – Büros, Wohnungen und Schulen',
        text: 'Wo viele Menschen zusammenkommen, ist erstklassige Luftqualität entscheidend. Saubere Lüftungskanäle garantieren eine konstante Frischluftzufuhr, steigern die Konzentration am Arbeitsplatz oder im Unterricht und reduzieren das Risiko von Atemwegserkrankungen spürbar.',
      },
      {
        heading: 'Lüftungsreinigung – Gesundheitswesen und Pflege',
        text: 'In Spitälern, Arztpraxen und Pflegeheimen hat Hygiene oberste Priorität. Verschmutzte Klimaanlagen und Lüftungen können Keime und Allergene verteilen. Durch unsere zertifizierte Reinigung minimieren Sie gesundheitliche Risiken für Patienten und Personal und sichern höchste Hygienestandards.',
      },
      {
        heading: 'Lüftungsreinigung – Gastronomie',
        text: 'Fettablagerungen in den Abluftanlagen von Grossküchen sind brandgefährlich und ein grosses Hygienerisiko. Unsere professionelle Reinigung beseitigt hartnäckige Rückstände komplett. Das sorgt für maximale Betriebssicherheit, senkt das Brandrisiko und erfüllt alle gesetzlichen Auflagen.',
      },
    ],
  },
  {
    slug: 'heizung',
    title: 'Heizung',
    tagline: 'Effiziente Wärme. Nachhaltig geplant.',
    imageUrl:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1600&q=80',
    intro:
      'Moderne und energieeffiziente Heizungssysteme für Ihr Gebäude. Als unabhängige HLKS-Ingenieure planen und optimieren wir Heizungsanlagen ohne Bindung an Hersteller – von der Wärmepumpe über Fernwärme bis zur Pelletsheizung. Unser Fokus liegt auf dem hydraulischen Abgleich und der Systemintegration für maximale Effizienz.',
    features: [
      'Wärmepumpen (Luft/Wasser, Erdwärme)',
      'Fernwärme-Übergabestationen',
      'Pelletsheizungen & Biomasse',
      'Hydraulischer Abgleich',
      'Heizungsoptimierung & eBO',
      'Sanierungs- und Ersatzkonzepte',
    ],
    sections: [
      {
        heading: 'Unser Ansatz',
        text: 'Als unabhängige HLKS-Ingenieure sind wir an keinen Hersteller gebunden. Wir wählen für Sie die optimale Heizungstechnologie aus – basierend auf Ihrem Gebäude, Ihrem Budget und den aktuellen Energiepreisen. Unser Ziel ist immer der maximale Wirkungsgrad bei minimalen Betriebskosten.',
      },
      {
        heading: 'Planung und Konzeption von Heizungsanlagen',
        text: 'Von der Auslegungsberechnung bis zur Planung der Rohrführung: Wir entwickeln ein massgeschneidertes Heizungskonzept für Ihr Gebäude. Besonderer Fokus liegt auf dem hydraulischen Abgleich, damit jeder Raum gleichmässig und effizient mit Wärme versorgt wird.',
      },
      {
        heading: 'Heizungsersatz und Sanierungskonzepte',
        text: 'Alte Ölheizung oder defektes Heizsystem? Wir analysieren Ihren Bedarf und entwickeln herstellerunabhängige Strategien für den Heizungsersatz – inklusive Förderberatung (Bundes- und Kantonsbeiträge) für den Wechsel auf erneuerbare Energien.',
      },
      {
        heading: 'Energieeffizienz- und Betriebsoptimierungen (eBO)',
        text: 'Ihre bestehende Heizungsanlage kann effizienter laufen. Wir überprüfen die Einstellparameter, führen den hydraulischen Abgleich durch und optimieren die Betriebszeiten – spürbare Einsparungen ohne grossen Investitionsaufwand.',
      },
    ],
  },
  {
    slug: 'solar',
    title: 'Solar & Photovoltaik',
    tagline: 'Sauber. Effizient. Zukunftssicher.',
    imageUrl:
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1600&q=80',
    intro:
      'Nachhaltige Stromerzeugung direkt auf Ihrem Dach. Wir planen hocheffiziente Photovoltaikanlagen, optimieren Stromspeichersysteme und konzipieren intelligente Lösungen für die E-Mobilität (Ladestationen/Wallboxen).',
    features: [
      'Photovoltaikanlagen (PV)',
      'Batteriespeichersysteme',
      'E-Mobilität & Wallboxen',
      'Netzeinspeisung & Eigenverbrauch',
      'Ertragsanalysen & Renditeberechnung',
      'Wartung und Monitoring',
    ],
    sections: [
      {
        heading: 'Unser Ansatz',
        text: 'Als unabhängige Energieexperten planen wir hocheffiziente PV-Anlagen ohne Bindung an einen Hersteller – immer mit dem Ziel, maximalen Eigenverbrauch und minimale Amortisationszeit zu erreichen.',
      },
      {
        heading: 'Planung und Konzeption von PV-Anlagen',
        text: 'Wir analysieren Ihre Dachfläche, Ausrichtung und Ihren Stromverbrauch und berechnen den optimalen Anlagentyp. Das Ergebnis: ein massgeschneidertes Solarkonzept mit realistischer Ertragsanalyse und Amortisationsrechnung.',
      },
      {
        heading: 'Sanierungs- und Modernisierungskonzepte',
        text: 'Bestehende PV-Anlage veraltet? Wir entwickeln herstellerunabhängige Strategien für die Modernisierung und Leistungssteigerung Ihrer Solaranlage – inklusive Integration von Batteriespeichern und Wallboxen für E-Mobilität.',
      },
      {
        heading: 'Unabhängige Gutachten und Expertisen',
        text: 'Als zertifizierte, neutrale Gutachter prüfen wir PV-Anlagen nach geltenden Normen und erstellen rechtssichere Expertisen. Technische Bauabnahme, Zweitmeinungen zu Kostenvoranschlägen und Ertragsanalysen.',
      },
    ],
  },
  {
    slug: 'sanitaer',
    title: 'Sanitärtechnische Systeme',
    tagline: 'Hygienisch. Präzise. Nachhaltig.',
    imageUrl:
      'https://images.unsplash.com/photo-1612538498456-e861df91d4d0?auto=format&fit=crop&w=1600&q=80',
    intro:
      'Professionelle Planung und Berechnung von Wasser- und Abwassersystemen. Wir sorgen für hygienisch einwandfreie Trinkwasserinstallationen, moderne Konzepte zur Wasseraufbereitung und eine effiziente Rohrleitungsführung.',
    features: [
      'Trinkwasserinstallationen',
      'Abwassersysteme',
      'Wasseraufbereitung',
      'Rohrleitungsplanung',
      'Legionellenprüfung & Hygieneschutz',
      'Regenwassernutzung',
    ],
    sections: [
      {
        heading: 'Unser Ansatz',
        text: 'Als unabhängige HLKS-Ingenieure betrachten wir Sanitäranlagen als Teil des vernetzten Gebäudesystems. Wir planen, optimieren und kontrollieren Ihre Installationen für störungsfreien, hygienisch einwandfreien Betrieb.',
      },
      {
        heading: 'Planung und Konzeption',
        text: 'Wir entwickeln massgeschneiderte Konzepte für Sanitäranlagen, exakt abgestimmt auf die Anforderungen Ihres Gebäudes – von der Trinkwasserinstallation bis zum Entwässerungssystem.',
      },
      {
        heading: 'Energieeffizienz und Wasseroptimierung',
        text: 'Wir analysieren bestehende Sanitäranlagen und spüren versteckte Einsparpotenziale auf. Durch systematische Feinabstimmung senken wir Ihre Wasser- und Energiekosten nachhaltig.',
      },
      {
        heading: 'Unabhängige Gutachten und Expertisen',
        text: 'Als zertifizierte, neutrale Gutachter erstellen wir fundierte technische Expertisen für Eigentümer, Liegenschaftsverwaltungen und Versicherungen. Inklusive Abnahme und Garantieprüfung nach SIA-Normen.',
      },
    ],
  },
  {
    slug: 'service',
    title: 'Service & Wartung',
    tagline: 'Zuverlässig. Planbar. Vorausschauend.',
    imageUrl:
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=80',
    intro:
      'Regelmässige Wartung, Reinigung und Service rund um Klima, Lüftung, Heizung und Sanitär. Unser Service-Team sorgt dafür, dass Ihre Anlagen einwandfrei, energieeffizient und mit minimalen Betriebskosten laufen – vom geplanten Wartungsvertrag bis zur kurzfristigen Störungsbehebung.',
    features: [
      'Wartungsverträge & Service-Pakete',
      'Lüftungsreinigung & Hygieneprüfung',
      'Klimaanlagen-Service & Filterwechsel',
      'Heizungsservice & hydraulischer Abgleich',
      'Sanitär-Service & Legionellenprüfung',
      '24/7-Bereitschaft bei Störungen',
    ],
    sections: [
      {
        heading: 'Unser Ansatz',
        text: 'Anlagen, die regelmässig gewartet werden, halten länger, verbrauchen weniger Energie und fallen seltener aus. Wir bieten massgeschneiderte Service-Pakete – vom Privathaushalt bis zum Industriebetrieb. Transparente Preise, klare Leistungen, dokumentierte Kontrollen.',
      },
      {
        heading: 'Wartungsverträge nach Mass',
        text: 'Wir erstellen für Sie ein individuelles Wartungsprogramm basierend auf Anlagentyp, Nutzung und gesetzlichen Vorgaben. Sie erhalten regelmässige Kontrollen, dokumentierte Berichte und priorisierten Service bei Störungen.',
      },
      {
        heading: 'Lüftungs- & Klimaanlagen-Service',
        text: 'Filterwechsel, Hygienekontrollen nach SIA, Reinigung der Kanäle und Wärmetauscher. Wir prüfen Luftmengen, justieren Regelungen und sorgen dafür, dass Ihre Anlage hygienisch einwandfrei und energieeffizient arbeitet.',
      },
      {
        heading: 'Heizungs- & Sanitärservice',
        text: 'Jährlicher Heizungsservice, hydraulischer Abgleich, Kontrolle von Wärmepumpen und Pelletsanlagen. Im Sanitärbereich übernehmen wir Legionellenprüfung, Spülungen, Reparaturen und Modernisierungen Ihrer Anlage.',
      },
      {
        heading: 'Störungsdienst & 24/7-Bereitschaft',
        text: 'Heizungsausfall, Wasserleck oder defekte Lüftung? Unser Service-Team ist auch ausserhalb der Geschäftszeiten erreichbar und garantiert schnelle Reaktion – wir minimieren Ausfallzeiten und sichern den Betrieb Ihres Gebäudes.',
      },
    ],
  },
  {
    slug: 'rueckbau',
    title: 'Rückbau Gebäudetechnische Anlagen',
    tagline: 'Rückbau. Demontage. Schlüsselübergabe.',
    imageUrl:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80',
    intro:
      'Wir sind Ihr fachlicher Partner für den professionellen Rückbau und die Demontage von Maschinen, Industrieanlagen sowie kompletten Produktionshallen. Ob Betriebsverlagerung, Modernisierung oder finale Stilllegung – wir übernehmen das gesamte Projekt von der Planung bis zur Schlüsselübergabe.',
    features: [
      'Sorgfältige Rückbauplanung',
      'Risikoanalyse & Sicherheitskonzepte',
      'Fachgerechte Demontage',
      'Rückbau im laufenden Betrieb',
      'Schadstoffsanierung & Entsorgung',
      'Schwertransporte',
    ],
    sections: [
      {
        heading: 'Sorgfältige Rückbauplanung',
        text: 'Präzise Bestandsaufnahme, Zeiteinteilung und Koordination aller Schritte. Wir analysieren Ihr Objekt im Detail und erstellen einen verbindlichen Ablaufplan – damit jeder Schritt sitzt und Verzögerungen vermieden werden.',
      },
      {
        heading: 'Risikoanalyse & Sicherheit',
        text: 'Erstellung zertifizierter Sicherheits- und Brandschutzkonzepte für einen unfallfreien Ablauf. Wir identifizieren Gefahrenquellen frühzeitig und sorgen für die Einhaltung aller geltenden Schweizer Normen und SUVA-Vorschriften.',
      },
      {
        heading: 'Fachgerechte Demontage',
        text: 'Erfahrenes Personal demontiert, kennzeichnet und bereitet Ihre Anlagen für den Abtransport vor. Jedes Bauteil wird systematisch dokumentiert – ideal bei Betriebsverlagerungen, Wiederaufbau oder Verkauf einzelner Komponenten.',
      },
      {
        heading: 'Rückbau im laufenden Betrieb',
        text: 'Minimierung von Stillstandzeiten – wir arbeiten auf Wunsch parallel zu Ihrer laufenden Produktion. Durch sorgfältige Abschottung, klare Verkehrsführung und Lärmschutzmassnahmen bleibt Ihre Wertschöpfung erhalten.',
      },
      {
        heading: 'Schadstoffsanierung & Entsorgung',
        text: 'Sicherer Umgang mit Altlasten (Asbest, PCB, KMF etc.) und umweltgerechtes Recycling mit ISO-zertifizierten Partnern. Sämtliche Materialströme werden nachvollziehbar dokumentiert – inklusive Entsorgungsnachweise.',
      },
      {
        heading: 'Schwertransporte',
        text: 'Organisation und Durchführung von anspruchsvollen Transporten schwerer und sperriger Maschinenkomponenten. Vom Schwerlastkran über Sondergenehmigungen bis hin zum Zielort übernehmen wir die gesamte Logistik.',
      },
      {
        heading: 'Warum mit uns?',
        text: 'Wir garantieren Ihnen absolute Kostentransparenz, verlässliche Zeitpläne und eine saubere Übergabe der Hallen in den Grundzustand. Effizient, sicher und nachhaltig. Möchten Sie Ihr Projekt besprechen? Kontaktieren Sie uns für ein unverbindliches Erstgespräch.',
      },
    ],
  },
];

export function getCategory(slug: string): GtCategory | undefined {
  return GT_CATEGORIES.find((c) => c.slug === slug);
}
