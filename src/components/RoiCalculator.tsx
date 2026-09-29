import { useMemo, useState } from 'react';
import { Slider } from '@/components/ui/slider';

const MIN_TICKETS = 500;
const MAX_TICKETS = 50000;
const TICKETS_STEP = 500;
const DEFAULT_TICKETS = 5000;

const MANUAL_REVIEW_RATE = 0.02;
const REVIEW_HOURS_PER_TICKET = 0.25;
const LABOR_COST_PER_HOUR = 35;
const HUMAN_REVIEW_COST_PER_TICKET =
  REVIEW_HOURS_PER_TICKET * LABOR_COST_PER_HOUR;
const RIPETEXT_REVIEW_COST_PER_TICKET = 0.1;
const CSAT_SURVEY_RATE = 0.1;
const ARR_PER_CUSTOMER = 1000;
const BASELINE_CHURN_RATE = 0.2;
const RIPETEXT_CHURN_RATE = 0.18;

const numberFormatter = new Intl.NumberFormat('en-US');

const formatNumber = (value: number) =>
  numberFormatter.format(Math.round(value));

const formatCurrency = (value: number) => `$${formatNumber(value)}`;

interface MetricRow {
  label: string;
  before: string;
  beforeSub?: string;
  after: string;
  afterSub?: string;
}

const ASSUMPTIONS = [
  'Manual QA teams review ~2% of tickets on average, at ~15 min per review and $35/hr labor cost ($8.75/ticket). RipeText reviews every ticket at $0.10 each.',
  'Only ~10% of customers answer CSAT surveys; industry-average CSAT is 78%.',
  'Churn modeled per 1,000 customers at $1,000 ARR each: 20% industry average vs 18% with RipeText.'
];

const RoiCalculator = () => {
  const [ticketsPerMonth, setTicketsPerMonth] = useState(DEFAULT_TICKETS);

  const rows = useMemo<MetricRow[]>(() => {
    const annualTickets = ticketsPerMonth * 12;
    const manualReviewCost =
      annualTickets * MANUAL_REVIEW_RATE * HUMAN_REVIEW_COST_PER_TICKET;
    const ripetextReviewCost = annualTickets * RIPETEXT_REVIEW_COST_PER_TICKET;
    const churnedBefore = BASELINE_CHURN_RATE * 1000;
    const churnedAfter = RIPETEXT_CHURN_RATE * 1000;

    return [
      {
        label: 'QA cost per ticket',
        before: '$8.75',
        beforeSub: 'human review',
        after: '$0.10',
        afterSub: 'with RipeText'
      },
      {
        label: 'Annual QA review cost',
        before: formatCurrency(manualReviewCost),
        beforeSub: 'for 2% coverage',
        after: formatCurrency(ripetextReviewCost),
        afterSub: 'for 100% coverage'
      },
      {
        label: 'Customers lost per 1,000 / year',
        before: `${formatNumber(churnedBefore)}`,
        beforeSub: `${formatCurrency(
          churnedBefore * ARR_PER_CUSTOMER
        )} ARR lost`,
        after: `${formatNumber(churnedAfter)}`,
        afterSub: `${formatCurrency(churnedAfter * ARR_PER_CUSTOMER)} ARR lost`
      },
      {
        label: 'Tickets with a CSAT score / year',
        before: formatNumber(annualTickets * CSAT_SURVEY_RATE),
        beforeSub: '10% survey responses',
        after: formatNumber(annualTickets),
        afterSub: '100% of tickets'
      },
      {
        label: 'Tickets QA reviewed / year',
        before: formatNumber(annualTickets * MANUAL_REVIEW_RATE),
        beforeSub: '2% sampled',
        after: formatNumber(annualTickets),
        afterSub: '100% of tickets'
      },
      {
        label: 'CSAT score',
        before: '78%',
        beforeSub: 'industry average',
        after: '90%',
        afterSub: 'with RipeText'
      }
    ];
  }, [ticketsPerMonth]);

  const handleSliderChange = (values: number[]) => {
    setTicketsPerMonth(values[0]);
  };

  return (
    <div className="w-full rounded-[20px] border border-lp-divider bg-white p-6 shadow-card-light lg:p-8">
      <p className="font-mono text-xs font-normal uppercase tracking-[2.4px] text-[#0caee9]">
        ROI Calculator
      </p>

      <div className="mt-5">
        <div className="flex items-baseline justify-between gap-4">
          <p className="font-geist text-[13px] text-lp-text-muted lg:text-[14px]">
            Support tickets per month
          </p>
          <p className="font-display text-[28px] leading-none text-lp-text-dark lg:text-[32px]">
            {formatNumber(ticketsPerMonth)}
          </p>
        </div>
        <Slider
          value={[ticketsPerMonth]}
          onValueChange={handleSliderChange}
          min={MIN_TICKETS}
          max={MAX_TICKETS}
          step={TICKETS_STEP}
          aria-label="Support tickets per month"
          className="mt-4"
        />
      </div>

      <div className="mt-7">
        <div className="grid grid-cols-[1.15fr_1fr_1fr] items-end gap-x-3 border-b border-lp-divider pb-2">
          <span />
          <p className="font-geist text-[11px] font-medium uppercase tracking-[1px] text-lp-orange lg:text-[12px]">
            Without RipeText
          </p>
          <p className="font-geist text-[11px] font-medium uppercase tracking-[1px] text-[#2a9d67] lg:text-[12px]">
            With RipeText
          </p>
        </div>

        {rows.map((row) => (
          <div
            key={row.label}
            className="grid grid-cols-[1.15fr_1fr_1fr] items-center gap-x-3 border-b border-lp-divider py-3 last:border-b-0"
          >
            <p className="font-geist text-[12px] leading-snug text-lp-text-muted lg:text-[13px]">
              {row.label}
            </p>
            <div>
              <p className="font-display text-[20px] leading-none text-lp-orange lg:text-[24px]">
                {row.before}
              </p>
              {row.beforeSub ? (
                <p className="mt-1 font-geist text-[10px] leading-tight text-lp-orange/70 lg:text-[11px]">
                  {row.beforeSub}
                </p>
              ) : null}
            </div>
            <div>
              <p className="font-display text-[20px] leading-none text-[#2a9d67] lg:text-[24px]">
                {row.after}
              </p>
              {row.afterSub ? (
                <p className="mt-1 font-geist text-[10px] leading-tight text-[#2a9d67]/70 lg:text-[11px]">
                  {row.afterSub}
                </p>
              ) : null}
            </div>
          </div>
        ))}
      </div>

      <ul className="mt-5 space-y-1">
        {ASSUMPTIONS.map((assumption) => (
          <li
            key={assumption}
            className="flex gap-1.5 font-geist text-[10px] leading-snug text-lp-text-muted lg:text-[11px]"
          >
            <span aria-hidden>*</span>
            <span>{assumption}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RoiCalculator;
