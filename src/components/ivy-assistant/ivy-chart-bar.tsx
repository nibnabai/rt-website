const BAR_WIDTH = 18.721;
const BAR_RADIUS = 4.40496;

export function IvyChartBar({
  heightPx,
  fill,
  className = '',
  style,
  variant = 'rounded'
}: {
  heightPx: number;
  fill: string;
  className?: string;
  style?: React.CSSProperties;
  variant?: 'rounded' | 'flat';
}) {
  if (heightPx <= 0) {
    return null;
  }

  return (
    <svg
      width={BAR_WIDTH}
      height={heightPx}
      viewBox={`0 0 ${BAR_WIDTH} ${heightPx}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-hidden
      preserveAspectRatio="none"
    >
      {variant === 'flat' ? (
        <rect width={BAR_WIDTH} height={heightPx} fill={fill} />
      ) : (
        <path
          d={`M0 ${BAR_RADIUS}C0 3.23669 0.464089 2.11627 1.29018 1.29018C2.11627 0.464093 3.23669 0 ${BAR_RADIUS} 0H14.3161C15.4844 0 16.6048 0.464089 17.4309 1.29018C18.257 2.11627 18.7211 3.23669 18.7211 ${BAR_RADIUS}V${heightPx}H0V${BAR_RADIUS}Z`}
          fill={fill}
        />
      )}
    </svg>
  );
}

export function scaleBarHeight(
  value: number,
  maxValue: number,
  plotHeight: number
) {
  return (value / maxValue) * plotHeight;
}
