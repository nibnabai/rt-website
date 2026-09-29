const legendItems = [
  { color: '#18305b', label: 'Color' },
  { color: '#dbe8ff', label: 'Race' },
  { color: '#7495d3', label: 'Religion' },
  { color: '#93b4f1', label: 'Sex' },
  { color: '#516996', label: 'Disability' },
  { color: '#3a527e', label: 'Other' },
  { color: '#bad1fb', label: 'National origin' },
  { color: '#bad1fb', label: 'Familial status' }
];

function PieChartSVG() {
  const labels: {
    text: string;
    x: number;
    y: number;
    anchor: 'start' | 'end' | 'middle';
  }[] = [
    { text: 'Color 33%', x: 310, y: 22, anchor: 'start' },
    { text: 'Other 25%', x: 365, y: 135, anchor: 'start' },
    { text: 'Disability 7%', x: 335, y: 214, anchor: 'start' },
    { text: 'Familial status 5%', x: 200, y: 238, anchor: 'start' },
    { text: 'Religion 7%', x: 115, y: 220, anchor: 'end' },
    { text: 'Sex 8%', x: 112, y: 156, anchor: 'end' },
    { text: 'National origin 7%', x: 102, y: 103, anchor: 'end' },
    { text: 'Race 8%', x: 152, y: 41, anchor: 'end' }
  ];

  return (
    <svg
      viewBox="0 0 496 246"
      className="mx-auto w-full max-w-[495px]"
      aria-label="Pie chart showing compliance error distribution"
    >
      <path
        d="M335.584 122.988C335.584 106.787 331.104 90.9015 322.639 77.0877C314.174 63.2739 302.053 52.07 287.618 44.7148C273.183 37.3596 256.994 34.1396 240.843 35.4107C224.692 36.6819 209.207 42.3947 196.1 51.9175L247.736 122.988H335.584Z"
        fill="#18305B"
        stroke="white"
        strokeWidth="0.878"
      />
      <path
        d="M196.099 51.9172C185.637 59.5181 176.983 69.3349 170.753 80.6668C164.523 91.9987 160.872 104.566 160.06 117.472C159.248 130.378 161.295 143.304 166.056 155.327C170.816 167.351 178.172 178.175 187.599 187.027L247.735 122.988L196.099 51.9172Z"
        fill="#93B4F1"
        stroke="white"
        strokeWidth="0.878"
      />
      <path
        d="M187.596 187.027C202.498 201.021 221.814 209.38 242.216 210.663C262.618 211.947 282.83 206.075 299.368 194.059L247.732 122.988L187.596 187.027Z"
        fill="#7495D3"
        stroke="white"
        strokeWidth="0.878"
      />
      <path
        d="M299.367 194.059C310.582 185.91 319.71 175.223 326.004 162.871C332.298 150.518 335.579 136.852 335.579 122.988H247.73L299.367 194.059Z"
        fill="#3A527E"
        stroke="white"
        strokeWidth="0.878"
      />
      <path
        d="M226.764 208.254C240.972 211.9 255.872 211.897 270.079 208.247L248.407 123.899L226.764 208.254Z"
        fill="#657EAD"
        stroke="white"
        strokeWidth="0.968"
      />
      <path
        d="M168.157 85.4579C161.869 98.7111 159.031 113.338 159.906 127.981L246.839 122.786L168.157 85.4579Z"
        fill="#BAD1FB"
        stroke="white"
        strokeWidth="0.968"
      />
      <path
        d="M195.404 52.3258C183.6 61.0339 174.186 72.5827 168.037 85.9005L247.103 122.408L195.404 52.3258Z"
        fill="#DBE8FF"
        stroke="white"
        strokeWidth="0.968"
      />
      <path
        d="M263.964 209.685C277.954 206.934 291.065 200.606 302.078 191.29L248.601 124.577L263.964 209.685Z"
        fill="#516996"
        stroke="white"
        strokeWidth="0.968"
      />

      {labels.map((l) => (
        <text
          key={l.text}
          x={l.x}
          y={l.y}
          textAnchor={l.anchor}
          fill="#18305b"
          fontSize="10.5"
          fontFamily="Inter, sans-serif"
        >
          {l.text}
        </text>
      ))}
    </svg>
  );
}

function LineChartSVG() {
  const xPositions = [38.2, 125.0, 211.8, 298.6, 385.4, 472.2];
  const yPositions = [215.229, 162.52, 109.81, 57.1, 4.39];
  const xLabels = ['12-22', '12-27', '01-03', '01-10', '01-17', '01-24'];
  const yLabels = ['0', '5', '10', '15', '20'];

  const dots = [
    { cx: 38.2, cy: 88.727 },
    { cx: 125.0, cy: 57.1 },
    { cx: 211.8, cy: 25.48 },
    { cx: 298.6, cy: 67.64 },
    { cx: 385.4, cy: 109.81 },
    { cx: 472.2, cy: 130.89 }
  ];

  return (
    <svg
      viewBox="0 0 496 246"
      className="w-full"
      aria-label="Line chart showing compliance errors over time"
    >
      {/* Dashed horizontal grid lines */}
      {yPositions.map((y) => (
        <line
          key={`h-${y}`}
          x1={38.2}
          y1={y}
          x2={472.2}
          y2={y}
          stroke="#E2E2E2"
          strokeWidth="0.878"
          strokeDasharray="2.64 2.64"
        />
      ))}

      {/* Dashed vertical grid lines */}
      {xPositions.map((x) => (
        <line
          key={`v-${x}`}
          x1={x}
          y1={4.39}
          x2={x}
          y2={215.229}
          stroke="#E2E2E2"
          strokeWidth="0.878"
          strokeDasharray="2.64 2.64"
        />
      ))}

      {/* Solid bottom axis */}
      <line
        x1={38.2}
        y1={215.229}
        x2={472.2}
        y2={215.229}
        stroke="#666"
        strokeWidth="0.878"
      />
      {/* Solid left axis */}
      <line
        x1={38.2}
        y1={4.39}
        x2={38.2}
        y2={215.229}
        stroke="#666"
        strokeWidth="0.878"
      />

      {/* X-axis tick marks */}
      {xPositions.map((x) => (
        <line
          key={`xt-${x}`}
          x1={x}
          y1={215.229}
          x2={x}
          y2={220.5}
          stroke="#666"
          strokeWidth="0.878"
        />
      ))}

      {/* Y-axis tick marks */}
      {yPositions.map((y) => (
        <line
          key={`yt-${y}`}
          x1={32.94}
          y1={y}
          x2={38.2}
          y2={y}
          stroke="#666"
          strokeWidth="0.878"
        />
      ))}

      {/* X-axis labels */}
      {xPositions.map((x, i) => (
        <text
          key={`xl-${i}`}
          x={x}
          y={235}
          textAnchor="middle"
          fill="#6B7280"
          fontSize="10"
          fontFamily="Inter, sans-serif"
        >
          {xLabels[i]}
        </text>
      ))}

      {/* Y-axis labels */}
      {yPositions.map((y, i) => (
        <text
          key={`yl-${i}`}
          x={30}
          y={y + 4}
          textAnchor="end"
          fill="#6B7280"
          fontSize="10"
          fontFamily="Inter, sans-serif"
        >
          {yLabels[i]}
        </text>
      ))}

      {/* Smooth data line — exact Figma path */}
      <path
        d="M38.2012 88.727C67.1323 78.1851 96.0643 67.6433 124.995 57.1015C153.927 46.5597 182.859 25.4761 211.79 25.4761C240.721 25.4761 269.653 53.5876 298.584 67.6433C327.515 81.6991 356.447 99.2688 385.378 109.811C414.309 120.352 443.241 125.623 472.173 130.894"
        fill="none"
        stroke="#3A527E"
        strokeWidth="1.757"
      />

      {/* Data points */}
      {dots.map((d, i) => (
        <circle
          key={i}
          cx={d.cx}
          cy={d.cy}
          r="3.51"
          fill="#3A527E"
          stroke="#3A527E"
          strokeWidth="1.757"
        />
      ))}
    </svg>
  );
}

export function FhaAnalytics() {
  return (
    <section className="bg-white pt-0 pb-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-8">
        <div className="flex flex-col items-start gap-[62px]">
          {/* Header */}
          <div className="flex max-w-[1214px] flex-col gap-[26px]">
            <h2 className="font-display text-4xl tracking-[-0.025em] text-[#151a28] lg:text-[48px] lg:leading-[60px]">
              We analyze{' '}
              <em className="font-display italic">every conversation</em> to
              detect all violation patterns.
            </h2>
            <p className="max-w-[1069px] text-lg font-normal leading-[29.25px] text-[#636a7e]">
              We scan completed conversations continuously. The result: patterns
              you couldn&apos;t see before, risks caught early, and measurable
              improvement over time.
            </p>
          </div>

          {/* Charts */}
          <div className="grid w-full gap-[22px] lg:grid-cols-2">
            {/* Pie Chart */}
            <div className="flex flex-col gap-[14px] rounded-[13px] border-[0.878px] border-[#e2e2e2] bg-white px-[22px] pb-px pt-[22px]">
              <p className="text-[14px] font-medium leading-[21px] text-[#17234c]">
                Compliance Error Distribution
              </p>
              <div className="flex flex-col gap-5">
                <PieChartSVG />
                <div className="flex flex-col items-center gap-[10px] px-[30px] pb-[22px]">
                  <div className="flex flex-wrap justify-center gap-x-[15px] gap-y-[10px]">
                    {legendItems.slice(0, 6).map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center gap-[7px]"
                      >
                        <span
                          className="h-[10.5px] w-[10.5px] rounded-full"
                          style={{ backgroundColor: item.color }}
                        />
                        <span className="text-[10.5px] leading-4 text-[#6b7280]">
                          {item.label}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-center gap-x-[15px]">
                    {legendItems.slice(6).map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center gap-[7px]"
                      >
                        <span
                          className="h-[10.5px] w-[10.5px] rounded-full"
                          style={{ backgroundColor: item.color }}
                        />
                        <span className="text-[10.5px] leading-4 text-[#6b7280]">
                          {item.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Line Chart */}
            <div className="flex flex-col gap-12 rounded-[13px] border-[0.878px] border-[#e2e2e2] bg-white p-[22px]">
              <p className="text-[14px] font-medium leading-[21px] text-[#17234c]">
                New Compliance Errors Over Time
              </p>
              <LineChartSVG />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
