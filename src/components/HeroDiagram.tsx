import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import {
  PerformanceGraph,
  IssueRadar,
  UpBalloon,
  MiddleBalloon,
  DownBalloon,
  PerformanceGraphMobile,
  IssueRadarMobile,
  UpBalloonMobile,
  MiddleBalloonMobile,
  DownBalloonMobile
} from './svg/HeroSection';
import { cdnUrl } from '@/util/cdn';

interface FlowPointConfig {
  id: string;
  className: string;
  imageSrc: string;
  imageSize: number;
  displaySize: number;
}

const LOGO_SHADOW_CLASS = 'drop-shadow-[0px_4px_4px_rgba(142,122,234,0.25)]';

const DESKTOP_FLOW_POINTS: FlowPointConfig[] = [
  {
    id: 'left-large',
    className:
      'absolute left-[125px] top-[194px] z-10 animate-flow-left-desktop',
    imageSrc: '/images/hero-section/line-point.webp',
    imageSize: 24,
    displaySize: 12
  },
  {
    id: 'right-large',
    className:
      'absolute left-[480px] top-[194px] z-10 animate-flow-right-desktop',
    imageSrc: '/images/hero-section/line-point.webp',
    imageSize: 24,
    displaySize: 12
  },
  {
    id: 'left-medium',
    className:
      'absolute left-[177px] top-[156px] z-10 animate-flow-left-medium-desktop',
    imageSrc: '/images/hero-section/line-point.webp',
    imageSize: 24,
    displaySize: 12
  },
  {
    id: 'right-medium',
    className:
      'absolute left-[428px] top-[156px] z-10 animate-flow-right-medium-desktop',
    imageSrc: '/images/hero-section/line-point.webp',
    imageSize: 24,
    displaySize: 12
  },
  {
    id: 'left-small',
    className:
      'absolute left-[254px] top-[126px] z-10 animate-flow-left-small-desktop',
    imageSrc: '/images/hero-section/line-point.webp',
    imageSize: 24,
    displaySize: 12
  },
  {
    id: 'right-small',
    className:
      'absolute left-[350px] top-[126px] z-10 animate-flow-right-small-desktop',
    imageSrc: '/images/hero-section/line-point.webp',
    imageSize: 24,
    displaySize: 12
  },
  {
    id: 'bottom-right',
    className:
      'absolute left-[300px] top-[396px] z-10 animate-flow-bottom-right-desktop',
    imageSrc: '/images/hero-section/line-point.webp',
    imageSize: 24,
    displaySize: 12
  },
  {
    id: 'bottom-left',
    className:
      'absolute left-[304px] top-[396px] z-10 animate-flow-bottom-left-desktop',
    imageSrc: '/images/hero-section/line-point.webp',
    imageSize: 24,
    displaySize: 12
  }
];

const MOBILE_FLOW_POINTS: FlowPointConfig[] = [
  {
    id: 'left-large-m',
    className:
      'absolute left-1/2 -ml-[96px] top-[161px] z-10 animate-flow-left',
    imageSrc: '/images/hero-section/line-point.webp',
    imageSize: 12,
    displaySize: 6
  },
  {
    id: 'right-large-m',
    className:
      'absolute left-1/2 ml-[90px] top-[161px] z-10 animate-flow-right',
    imageSrc: '/images/hero-section/line-point.webp',
    imageSize: 12,
    displaySize: 6
  },
  {
    id: 'left-medium-m',
    className:
      'absolute left-1/2 -ml-[72px] top-[113px] z-10 animate-flow-left-medium',
    imageSrc: '/images/hero-section/line-point.webp',
    imageSize: 12,
    displaySize: 6
  },
  {
    id: 'right-medium-m',
    className:
      'absolute left-1/2 ml-[61px] top-[113px] z-10 animate-flow-right-medium',
    imageSrc: '/images/hero-section/line-point.webp',
    imageSize: 12,
    displaySize: 6
  },
  {
    id: 'left-small-m',
    className:
      'absolute left-1/2 -ml-[37px] top-[67px] z-10 animate-flow-left-small',
    imageSrc: '/images/hero-section/line-point.webp',
    imageSize: 12,
    displaySize: 6
  },
  {
    id: 'right-small-m',
    className:
      'absolute left-1/2 ml-[23px] top-[67px] z-10 animate-flow-right-small',
    imageSrc: '/images/hero-section/line-point.webp',
    imageSize: 12,
    displaySize: 6
  },
  {
    id: 'bottom-right-m',
    className:
      'absolute left-1/2 -ml-[25px] top-[364px] z-10 animate-flow-right-bottom',
    imageSrc: '/images/hero-section/line-point.webp',
    imageSize: 12,
    displaySize: 6
  },
  {
    id: 'bottom-left-m',
    className:
      'absolute left-1/2 ml-[20px] top-[364px] z-10 animate-flow-left-bottom',
    imageSrc: '/images/hero-section/line-point.webp',
    imageSize: 12,
    displaySize: 6
  }
];

interface ActivePoint {
  config: FlowPointConfig;
  duration: number;
  delay: number;
  key: number;
}

interface FlowPointItemProps {
  point: ActivePoint;
  onComplete: (key: number, lineId: string) => void;
}

const FlowPointItem: React.FC<FlowPointItemProps> = ({ point, onComplete }) => {
  const handleAnimationEnd = () => {
    onComplete(point.key, point.config.id);
  };

  return (
    <div
      className={`${point.config.className} pointer-events-none`}
      style={{
        animationDuration: `${point.duration}s`,
        animationDelay: `${point.delay}s`,
        animationIterationCount: 1
      }}
      onAnimationEnd={handleAnimationEnd}
    >
      <Image
        src={cdnUrl(point.config.imageSrc)}
        alt=""
        width={point.config.imageSize}
        height={point.config.imageSize}
        unoptimized
        style={{
          width: point.config.displaySize,
          height: 'auto'
        }}
      />
    </div>
  );
};

interface FlowPointsContainerProps {
  points: FlowPointConfig[];
}

const FlowPointsContainer: React.FC<FlowPointsContainerProps> = ({
  points
}) => {
  const [activePoints, setActivePoints] = useState<ActivePoint[]>([]);
  const nextKeyRef = useRef(0);
  const busyLinesRef = useRef<Set<string>>(new Set());
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const getRandomDuration = () => 2 + Math.random() * 1.5;

    const addNewPoint = () => {
      const availableLines = points.filter(
        (p) => !busyLinesRef.current.has(p.id)
      );

      if (availableLines.length > 0) {
        const randomIndex = Math.floor(Math.random() * availableLines.length);
        const selectedLine = availableLines[randomIndex];

        const key = nextKeyRef.current;
        nextKeyRef.current += 1;

        busyLinesRef.current.add(selectedLine.id);

        const newPoint: ActivePoint = {
          config: selectedLine,
          duration: getRandomDuration(),
          delay: 0,
          key
        };

        setActivePoints((prev) => [...prev, newPoint]);
      }

      const nextDelay = 300 + Math.random() * 500;
      timeoutRef.current = setTimeout(addNewPoint, nextDelay);
    };

    const initialLines = [...points]
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);
    const initialPoints: ActivePoint[] = initialLines.map((config, i) => {
      busyLinesRef.current.add(config.id);
      return {
        config,
        duration: getRandomDuration(),
        delay: i * 0.3,
        key: i
      };
    });

    setActivePoints(initialPoints);
    nextKeyRef.current = initialPoints.length;

    timeoutRef.current = setTimeout(addNewPoint, 800);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [points]);

  const handlePointComplete = (key: number, lineId: string) => {
    busyLinesRef.current.delete(lineId);
    setActivePoints((prev) => prev.filter((p) => p.key !== key));
  };

  return (
    <>
      {activePoints.map((point) => (
        <FlowPointItem
          key={point.key}
          point={point}
          onComplete={handlePointComplete}
        />
      ))}
    </>
  );
};

export const HeroDiagram = () => {
  return (
    <div className="w-full max-w-[616px] lg:h-[605px] overflow-visible rounded-[20px]">
      {/* Desktop View */}
      <div className="hidden lg:block min-w-[616px] w-[616px] h-[605px] relative rounded-[20px]">
        {/* Small lines - top */}
        <div className="absolute left-[250px] top-24">
          <Image
            src={cdnUrl('/images/hero-section/small-left.webp')}
            alt=""
            width={56}
            height={48}
            unoptimized
            sizes="56px"
          />
        </div>
        <div className="absolute left-[310px] top-24">
          <Image
            src={cdnUrl('/images/hero-section/small-right.webp')}
            alt=""
            width={56}
            height={48}
            unoptimized
            sizes="56px"
          />
        </div>

        {/* Middle lines */}
        <div className="absolute left-[177px] top-[90px]">
          <Image
            src={cdnUrl('/images/hero-section/middle-left.webp')}
            alt=""
            width={128}
            height={96}
            unoptimized
            sizes="120px"
            className="w-[120px] h-auto translate-x-[8px] translate-y-[6px]"
          />
        </div>
        <div className="absolute left-[310px] top-[90px]">
          <Image
            src={cdnUrl('/images/hero-section/middle-right.webp')}
            alt=""
            width={128}
            height={96}
            unoptimized
            sizes="120px"
            className="w-[120px] h-auto translate-y-[6px]"
          />
        </div>

        {/* Large lines */}
        <div className="absolute left-[130px] top-[150px]">
          <Image
            src={cdnUrl('/images/hero-section/large-left.webp')}
            alt=""
            width={176}
            height={64}
            unoptimized
            sizes="176px"
          />
        </div>
        <div className="absolute left-[310px] top-[150px]">
          <Image
            src={cdnUrl('/images/hero-section/large-right.webp')}
            alt=""
            width={176}
            height={64}
            unoptimized
            sizes="176px"
          />
        </div>

        {/* Ellipse images around center text */}
        <div className="absolute left-[220px] top-[214px]">
          <Image
            src={cdnUrl('/images/hero-section/ellipse-level-2.webp')}
            alt=""
            width={176}
            height={176}
            unoptimized
            priority
            className="animate-pulse-custom"
          />
        </div>
        <div className="absolute left-[236px] top-[230px]">
          <Image
            src={cdnUrl('/images/hero-section/ellipse-level-1.webp')}
            alt=""
            width={144}
            height={144}
            unoptimized
            className="animate-pulse-custom [animation-delay:500ms]"
          />
        </div>
        <div className="absolute left-[252px] top-[246px]">
          <Image
            src={cdnUrl('/images/hero-section/ellipse-level-0.webp')}
            alt=""
            width={112}
            height={112}
            unoptimized
            className="animate-pulse-custom [animation-delay:1000ms]"
          />
        </div>
        <div className="absolute left-[268px] top-[262px]">
          <Image
            src={cdnUrl('/images/hero-section/ellipse-level-(-1)-desktop.webp')}
            alt=""
            width={80}
            height={80}
            unoptimized
            className="animate-pulse-custom [animation-delay:1500ms]"
          />
        </div>

        <div className="absolute left-[130px] top-[388px]">
          <Image
            src={cdnUrl('/images/hero-section/bottom-left.webp')}
            alt=""
            width={176}
            height={56}
            unoptimized
            sizes="176px"
          />
        </div>
        <div className="absolute right-[130px] top-[388px]">
          <Image
            src={cdnUrl('/images/hero-section/bottom-right.webp')}
            alt=""
            width={176}
            height={56}
            unoptimized
            sizes="176px"
          />
        </div>

        {/* Animated Line Points - Random selection every 10 seconds */}
        <FlowPointsContainer points={DESKTOP_FLOW_POINTS} />

        {/* Logo images - Top row */}
        <div className="w-14 h-14 left-[223px] top-[52px] absolute">
          <Image
            src={cdnUrl('/images/hero-section/zendesk-logo-v2.webp')}
            alt="Zendesk"
            width={56}
            height={56}
            unoptimized
            sizes="56px"
            className={`w-14 h-14 object-contain ${LOGO_SHADOW_CLASS}`}
          />
        </div>
        <div className="w-14 h-14 left-[157px] top-[67.24px] absolute">
          <Image
            src={cdnUrl('/images/hero-section/intercom-logo-v2.webp')}
            alt="Intercom"
            width={56}
            height={56}
            unoptimized
            sizes="56px"
            className={`w-14 h-14 object-contain ${LOGO_SHADOW_CLASS}`}
          />
        </div>
        <div className="w-14 h-14 left-[102px] top-[108.02px] absolute">
          <Image
            src={cdnUrl('/images/hero-section/crisp-logo-v2.webp')}
            alt="Crisp"
            width={56}
            height={56}
            unoptimized
            sizes="56px"
            className={`w-14 h-14 object-contain ${LOGO_SHADOW_CLASS}`}
          />
        </div>
        <div className="w-14 h-14 left-[339px] top-[52px] absolute">
          <Image
            src={cdnUrl('/images/hero-section/front-logo-v2.webp')}
            alt="Front"
            width={56}
            height={56}
            unoptimized
            sizes="56px"
            className={`w-14 h-14 object-contain ${LOGO_SHADOW_CLASS}`}
          />
        </div>
        <div className="w-14 h-14 left-[458px] top-[108.02px] absolute">
          <Image
            src={cdnUrl('/images/hero-section/hubspot-logo-v2.webp')}
            alt="HubSpot"
            width={56}
            height={56}
            unoptimized
            sizes="52px"
            className={`w-14 h-14 object-contain ${LOGO_SHADOW_CLASS}`}
          />
        </div>
        <div className="w-14 h-14 left-[403px] top-[67.24px] absolute">
          <Image
            src={cdnUrl('/images/hero-section/salesforce-logo-v2.webp')}
            alt="Salesforce"
            width={56}
            height={56}
            unoptimized
            sizes="56px"
            className={`w-14 h-14 object-contain ${LOGO_SHADOW_CLASS}`}
          />
        </div>

        {/* Center Logo */}
        <div className="w-14 h-14 left-[280px] top-[275px] absolute flex items-center justify-center">
          <Image
            src={cdnUrl('/images/hero-section/ripe-text-logo-v2.webp')}
            alt="RIPETEXT"
            width={56}
            height={56}
            unoptimized
            sizes="56px"
            priority
          />
        </div>

        {/* Bottom Cards */}
        {/* Issue Radar Card */}
        <div className="w-36 h-40 left-[60px] top-[443px] absolute bg-white rounded-lg shadow-[0px_3.700934648513794px_3.700934648513794px_0px_rgba(142,122,234,0.25)] outline-[0.64px] outline-offset-[-0.64px] outline-gray-200">
          <div className="w-24 left-[29.61px] top-[133.60px] absolute text-center text-indigo-500 text-xs font-normal font-['Outfit']">
            Issue Radar
          </div>
          <div className="absolute left-[22.47px] top-[14.14px]">
            <IssueRadar />
          </div>
        </div>

        {/* Agent Performance Card */}
        <div className="w-36 h-40 left-[233.02px] top-[443px] absolute bg-white rounded-lg shadow-[0px_3.700934648513794px_3.700934648513794px_0px_rgba(142,122,234,0.25)] outline-[0.64px] outline-offset-[-0.64px] outline-gray-200">
          <div className="w-28 left-[20.94px] top-[134.16px] absolute text-center text-indigo-500 text-xs font-normal font-['Outfit']">
            Agent Performance
          </div>
          <div className="absolute left-[24px] top-[11px]">
            <PerformanceGraph />
          </div>
        </div>

        {/* AI Simulated Training Card */}
        <div className="w-36 h-40 left-[406.96px] top-[443px] absolute bg-white rounded-lg shadow-[0px_3.700934648513794px_3.700934648513794px_0px_rgba(142,122,234,0.25)] outline-[0.64px] outline-offset-[-0.64px] outline-gray-200">
          <div className="w-28 left-[20.35px] top-[134.16px] absolute text-center text-indigo-500 text-xs font-normal font-['Outfit']">
            AI Simulated training
          </div>

          {/* Profile image */}
          <div className="w-10 h-10 left-[6.48px] top-[22.21px] absolute">
            <Image
              src={cdnUrl('/images/hero-section/profile-image.webp')}
              alt="Profile"
              width={41}
              height={41}
              unoptimized
              sizes="41px"
              className="rounded-full"
            />
          </div>

          {/* Chat bubbles */}
          <div className="w-20 left-[54.59px] top-[22.21px] absolute inline-flex flex-col justify-start items-start gap-[1.18px]">
            <div className="self-stretch inline-flex justify-start items-start">
              <div className="absolute left-0 top-[10px]">
                <UpBalloon />
              </div>
            </div>
          </div>

          <div className="w-20 h-7 left-[56.44px] top-[50.89px] absolute inline-flex flex-col justify-start items-start gap-[0.79px]">
            <div className="absolute left-0 top-[10px]">
              <MiddleBalloon />
            </div>
          </div>

          <div className="w-20 h-9 left-[54.59px] top-[78.64px] absolute inline-flex flex-col justify-start items-start gap-[1.18px]">
            <div className="absolute left-0 top-[10px]">
              <DownBalloon />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="block lg:hidden w-full h-[550px] relative">
        {/* Center Ellipses - use same images as desktop, CSS handles sizing */}
        <div className="absolute left-1/2 top-[180px] -translate-x-1/2">
          <Image
            src={cdnUrl('/images/hero-section/ellipse-level-2.webp')}
            alt=""
            width={176}
            height={176}
            unoptimized
            priority
            className="animate-pulse-custom"
          />
        </div>
        <div className="absolute left-1/2 top-[196px] -translate-x-1/2">
          <Image
            src={cdnUrl('/images/hero-section/ellipse-level-1.webp')}
            alt=""
            width={144}
            height={144}
            unoptimized
            className="animate-pulse-custom [animation-delay:500ms]"
          />
        </div>
        <div className="absolute left-1/2 top-[212px] -translate-x-1/2">
          <Image
            src={cdnUrl('/images/hero-section/ellipse-level-0.webp')}
            alt=""
            width={112}
            height={112}
            unoptimized
            className="animate-pulse-custom [animation-delay:1000ms]"
          />
        </div>
        <div className="absolute left-1/2 top-[228px] -translate-x-1/2">
          <Image
            src={cdnUrl('/images/hero-section/ellipse-level-(-1).webp')}
            alt=""
            width={80}
            height={80}
            unoptimized
            className="animate-pulse-custom [animation-delay:1500ms]"
          />
        </div>
        {/* Center Logo */}
        <div className="absolute left-1/2 top-[240px] -translate-x-1/2 w-14 h-14 flex items-center justify-center">
          <Image
            src={cdnUrl('/images/hero-section/ripe-text-logo-v2.webp')}
            alt="RIPETEXT"
            width={56}
            height={56}
            unoptimized
            sizes="56px"
            priority
          />
        </div>
        {/* Mobile Lines - use same images with CSS sizing */}
        {/* Small Lines - Left & Right */}
        <div className="absolute left-1/2 -ml-[35px] top-[50px]">
          <Image
            src={cdnUrl('/images/hero-section/small-left.webp')}
            alt=""
            width={28}
            height={24}
            unoptimized
            sizes="28px"
          />
        </div>
        <div className="absolute left-1/2 mr-[35px] top-[50px]">
          <Image
            src={cdnUrl('/images/hero-section/small-right.webp')}
            alt=""
            width={28}
            height={24}
            unoptimized
            sizes="28px"
          />
        </div>

        {/* Middle Lines */}
        <div className="absolute left-1/2 -ml-[70px] top-[80px]">
          <Image
            src={cdnUrl('/images/hero-section/middle-left.webp')}
            alt=""
            width={64}
            height={48}
            unoptimized
            sizes="64px"
          />
        </div>
        <div className="absolute left-1/2 mr-[70px] top-[80px]">
          <Image
            src={cdnUrl('/images/hero-section/middle-right.webp')}
            alt=""
            width={64}
            height={48}
            unoptimized
            sizes="64px"
          />
        </div>

        {/* Large Lines */}
        <div className="absolute left-1/2 -ml-[93px] top-[140px]">
          <Image
            src={cdnUrl('/images/hero-section/large-left.webp')}
            alt=""
            width={88}
            height={32}
            unoptimized
            sizes="88px"
          />
        </div>
        <div className="absolute left-1/2 -mr-[93px] top-[140px]">
          <Image
            src={cdnUrl('/images/hero-section/large-right.webp')}
            alt=""
            width={88}
            height={32}
            unoptimized
            sizes="88px"
          />
        </div>

        {/* Top Logos - use same images */}
        <div className="absolute left-1/2 -ml-[60px] top-0 w-14 h-14">
          <Image
            src={cdnUrl('/images/hero-section/zendesk-logo-v2.webp')}
            alt="Zendesk"
            width={56}
            height={56}
            unoptimized
            sizes="56px"
            className={LOGO_SHADOW_CLASS}
          />
        </div>
        <div className="absolute left-1/2 mr-[65px] top-0 w-14 h-14">
          <Image
            src={cdnUrl('/images/hero-section/front-logo-v2.webp')}
            alt="Front"
            width={56}
            height={56}
            unoptimized
            sizes="56px"
            className={`w-14 h-14 object-contain ${LOGO_SHADOW_CLASS}`}
          />
        </div>

        {/* Middle */}
        <div className="absolute left-1/2 -ml-[98px] top-[40px] w-14 h-14">
          <Image
            src={cdnUrl('/images/hero-section/intercom-logo-v2.webp')}
            alt="Intercom"
            width={56}
            height={56}
            unoptimized
            sizes="56px"
            className={LOGO_SHADOW_CLASS}
          />
        </div>
        <div className="absolute left-1/2 ml-[35px] top-[40px] w-14 h-14">
          <Image
            src={cdnUrl('/images/hero-section/salesforce-logo-v2.webp')}
            alt="Salesforce"
            width={56}
            height={56}
            unoptimized
            sizes="56px"
            className={LOGO_SHADOW_CLASS}
          />
        </div>

        {/* Outer */}
        <div className="absolute left-1/2 -ml-[120px] top-[100px] w-14 h-14">
          <Image
            src={cdnUrl('/images/hero-section/crisp-logo-v2.webp')}
            alt="Crisp"
            width={56}
            height={56}
            unoptimized
            sizes="56px"
            className={`w-14 h-14 object-contain ${LOGO_SHADOW_CLASS}`}
          />
        </div>
        <div className="absolute left-1/2 ml-[65px] top-[100px] w-14 h-14">
          <Image
            src={cdnUrl('/images/hero-section/hubspot-logo-v2.webp')}
            alt="HubSpot"
            width={56}
            height={56}
            unoptimized
            sizes="56px"
            className={`w-14 h-14 object-contain ${LOGO_SHADOW_CLASS}`}
          />
        </div>

        {/* Bottom Lines */}
        <div className="absolute left-1/2 -ml-[110px] top-[360px]">
          <Image
            src={cdnUrl('/images/hero-section/bottom-left.webp')}
            alt=""
            width={88}
            height={28}
            unoptimized
            sizes="88px"
          />
        </div>
        <div className="absolute left-1/2 ml-[25px] top-[360px]">
          <Image
            src={cdnUrl('/images/hero-section/bottom-right.webp')}
            alt=""
            width={88}
            height={28}
            unoptimized
            sizes="88px"
          />
        </div>

        {/* Animated Line Points - Random selection every 10 seconds */}
        <FlowPointsContainer points={MOBILE_FLOW_POINTS} />

        {/* Bottom Cards - Stacked */}
        <div className="absolute top-[385px] w-full flex justify-center gap-[10px] px-2">
          {/* Issue Radar */}
          <div className="relative w-[102px] h-[130px] bg-white rounded-lg shadow-sm outline-[0.64px] outline-gray-200 shrink-0">
            <div className="absolute top-[10px] left-1/2 -translate-x-1/2">
              <IssueRadarMobile />
            </div>
            <div className="absolute bottom-4 w-full text-center text-indigo-500 text-[10px] font-normal font-['Outfit']">
              Issue Radar
            </div>
          </div>

          {/* Agent Performance */}
          <div className="relative w-[102px] h-[130px] bg-white rounded-lg shadow-sm outline-[0.64px] outline-gray-200 shrink-0">
            <div className="absolute top-[20px] left-1/2 -translate-x-1/2">
              <PerformanceGraphMobile />
            </div>
            <div className="absolute bottom-4 w-full text-center text-indigo-500 text-[10px] font-normal font-['Outfit']">
              Agent Performance
            </div>
          </div>

          {/* Training */}
          <div className="relative w-[102px] h-[130px] bg-white rounded-lg shadow-sm outline-[0.64px] outline-gray-200 shrink-0">
            <div className="absolute top-[15px] left-[5px] w-8 h-8">
              <Image
                src={cdnUrl('/images/hero-section/profile-image.webp')}
                alt="Profile"
                width={32}
                height={32}
                unoptimized
                sizes="32px"
                className="rounded-full"
              />
            </div>
            <div className="absolute top-[15px] right-[5px] flex flex-col gap-1">
              <UpBalloonMobile />
              <MiddleBalloonMobile />
              <DownBalloonMobile />
            </div>
            <div className="absolute bottom-4 w-full text-center text-indigo-500 text-[10px] font-normal font-['Outfit']">
              AI Training
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
