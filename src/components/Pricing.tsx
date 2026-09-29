const BULLET = (
  <span className="text-lp-text-muted select-none" aria-hidden>
    ·
  </span>
);

interface PricingCard {
  title: string;
  subtitle: string;
  price?: string;
  priceSuffix?: string;
  priceNote?: string;
  cta?: { label: string; href: string };
  featuresLabel: string;
  features: string[];
  badge?: { text: string; color: string };
}

const cards: PricingCard[] = [
  {
    title: 'Base Plan',
    subtitle: 'Usage-based core platform',
    price: '$0.10',
    priceSuffix: '/ ticket',
    featuresLabel: 'Included',
    features: [
      'Unlimited seats',
      'Unlimited conversations',
      'AI Support QA',
      'Issue Radar',
      'Customer Churn Risk',
      'Upsell Opportunities',
      'Training with AI',
      'Ivy — AI Teammate'
    ],
    badge: { text: 'Core Product', color: 'bg-[#012444]' }
  },
  {
    title: 'Custom Integration',
    subtitle: 'Legacy systems and custom infrastructure',
    cta: { label: 'Talk to Sales', href: 'mailto:sales@ripetext.com' },
    featuresLabel: 'Includes',
    features: [
      'Requirements gathering',
      'Planning',
      'Implementation',
      'Deployment'
    ]
  },
  {
    title: 'Private Deployment',
    subtitle: 'Your region. Your data. Your model contract.',
    cta: { label: 'Talk to Sales', href: 'mailto:sales@ripetext.com' },
    featuresLabel: 'Includes',
    features: [
      'EU data residency',
      "Inference under customer's own cloud AI contract",
      'Single-tenant isolated environment',
      'No customer data used for model training',
      'DPA and security review support',
      'Base usage billed separately'
    ]
  },
  {
    title: 'Priority Support',
    subtitle: 'Mandatory above 2,000 tickets/day',
    cta: { label: 'Talk to Sales', href: 'mailto:sales@ripetext.com' },
    featuresLabel: 'Includes',
    features: [
      'Dedicated Customer Success Manager',
      'Direct phone / IM contact',
      'Priority ticket resolution',
      'Quarterly sync-ups'
    ]
  }
];

const PricingSection = () => (
  <section
    id="pricing"
    className="relative w-full scroll-mt-20 overflow-hidden py-16"
  >
    <div
      className="pointer-events-none absolute inset-0"
      style={{
        background:
          'linear-gradient(270deg, transparent 0%, rgba(112,139,227,0.1) 50%, transparent 100%)'
      }}
    />

    <div className="relative mx-auto max-w-[1400px] px-5 lg:px-8">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <p className="font-mono text-xs font-normal uppercase tracking-[2.4px] text-[#0caee9] mb-4">
          Pricing
        </p>
        <h2 className="mb-4 font-['Instrument_Serif'] text-6xl font-normal leading-[1.15] tracking-[-0.5px] text-gray-900">
          Simple & Transparent
        </h2>
        <p className="font-sans text-lg leading-relaxed text-lp-text-muted">
          Pay for what you use, scale when you're ready
        </p>
      </div>

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <div
            key={card.title}
            className="relative flex flex-col rounded-2xl border border-[#d9d9d9] bg-white p-8 shadow-card-light"
          >
            {card.badge && (
              <span
                className={`absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full ${card.badge.color} px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white`}
              >
                {card.badge.text}
              </span>
            )}

            <p className="text-sm font-bold uppercase tracking-wider text-lp-purple">
              {card.title}
            </p>

            <p className="mt-2 text-sm leading-relaxed text-lp-text-muted">
              {card.subtitle}
            </p>

            {card.cta ? (
              <a
                href={card.cta.href}
                className="mt-6 inline-block rounded-lg bg-[#414a62] px-6 py-3 text-center text-sm font-bold text-white transition-opacity hover:opacity-90"
              >
                {card.cta.label}
              </a>
            ) : (
              <>
                <div className="mt-6 flex items-baseline gap-1.5">
                  <span className="font-display text-[28px] font-semibold leading-none text-[#012444]">
                    {card.price}
                  </span>
                  {card.priceSuffix && (
                    <span className="text-sm text-lp-text-muted">
                      {card.priceSuffix}
                    </span>
                  )}
                </div>

                {card.priceNote && (
                  <p className="mt-1.5 text-xs text-lp-text-muted">
                    {card.priceNote}
                  </p>
                )}
              </>
            )}

            <div className="my-6 h-px bg-[#012444]/10" />

            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#0caee9]">
              {card.featuresLabel}
            </p>

            <ul className="flex flex-col gap-2.5">
              {card.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5">
                  <span className="mt-0.5 shrink-0">{BULLET}</span>
                  <span className="text-sm leading-relaxed text-lp-text-muted">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
