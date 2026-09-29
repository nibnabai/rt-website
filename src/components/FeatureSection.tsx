import Image from 'next/image';
import { cdnUrl } from '@/util/cdn';

/** Figma Pattern/Horizontal: 2.81px bars @ 0.5 white, every 8.42px (pre-rotate layout) */
const CHART_FRAME_STRIPE_PERIOD_PX = 8.42;
const CHART_FRAME_STRIPE_HEIGHT_PX = 2.81;

const chartFrameStripeStyle = {
  backgroundImage: `repeating-linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.5) 0,
    rgba(255, 255, 255, 0.5) ${CHART_FRAME_STRIPE_HEIGHT_PX}px,
    transparent ${CHART_FRAME_STRIPE_HEIGHT_PX}px,
    transparent ${CHART_FRAME_STRIPE_PERIOD_PX}px
  )`
} as const;

interface FeatureSectionProps {
  number: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  reversed?: boolean;
  imageWidth?: number;
  imageHeight?: number;
  secondaryImageSrc?: string;
  secondaryImageAlt?: string;
}

const FeatureSection = ({
  number,
  title,
  description,
  imageSrc,
  imageAlt,
  reversed = false,
  imageWidth = 760,
  imageHeight = 205,
  secondaryImageSrc,
  secondaryImageAlt
}: FeatureSectionProps) => {
  const textAlignment = reversed ? 'text-right' : 'text-left';
  const flexDirection = reversed ? 'lg:flex-row-reverse' : 'lg:flex-row';
  const imageJustify = reversed
    ? 'justify-center lg:justify-start'
    : 'justify-center lg:justify-end';
  const descriptionAlign = reversed ? 'ml-auto' : '';

  return (
    <div className="w-full relative lg:mt-0 mt-10">
      {/* Mobile */}
      <div className="block lg:hidden w-full relative">
        <div className="relative z-10 px-5 mb-10 text-center pt-10">
          <span className="font-geist font-normal text-[15px] leading-[1.2] text-[#546087] mb-2.5 block">
            {number}
          </span>
          <h3 className="font-bold text-[20px] leading-tight text-[#546087] mb-4">
            {title}
          </h3>
          <p className="font-normal text-sm leading-[150%] text-[#424F77]/70">
            {description}
          </p>
        </div>

        <div className="relative z-10 flex w-full justify-center pb-10">
          <div className="relative w-full max-w-[393px] px-5">
            <div className="relative overflow-hidden rounded-[10px] bg-lp-chart-frame px-4 py-5 sm:px-5 sm:py-6">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={chartFrameStripeStyle}
              />
              <div className="flex w-full justify-center">
                <div className="relative z-10 w-[92%] max-w-[340px]">
                  <Image
                    src={cdnUrl(imageSrc)}
                    alt={imageAlt}
                    width={imageWidth}
                    height={imageHeight}
                    unoptimized
                    className="block h-auto w-full object-contain"
                    sizes="90vw"
                  />
                  {secondaryImageSrc && (
                    <Image
                      src={cdnUrl(secondaryImageSrc)}
                      alt={secondaryImageAlt ?? ''}
                      width={imageWidth}
                      height={imageHeight}
                      unoptimized
                      className="relative z-20 -mt-5 ml-2 block h-auto w-[85%] object-contain shadow-lg"
                      sizes="75vw"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden lg:block w-full relative">
        <div className="relative w-full z-10 py-[80px]">
          <div className="container mx-auto px-4">
            <div
              className={`flex flex-col ${flexDirection} items-start justify-between gap-12 lg:gap-20 relative w-full h-full`}
            >
              {/* Text Column */}
              <div
                className={`flex-1 max-w-[500px] relative z-20 pt-0 ${textAlignment}`}
              >
                <span className="font-geist font-normal text-2xl leading-none text-[#546087] mb-2.5 block">
                  {number}
                </span>
                <h3 className="font-display text-[40px] leading-[1.2] text-lp-text-dark mb-6">
                  {title}
                </h3>
                <p
                  className={`font-geist font-normal text-[18px] leading-normal text-lp-text-muted ${
                    reversed ? 'max-w-[470px]' : 'max-w-[373px]'
                  } ${descriptionAlign}`}
                >
                  {description}
                </p>
              </div>

              {/* Image Column */}
              <div
                className={`flex-1 w-full relative h-full flex items-start pt-0 ${imageJustify}`}
              >
                <div className="relative z-10 w-full max-w-[1005px]">
                  <div className="relative overflow-hidden rounded-[10px] bg-lp-chart-frame px-8 py-8 lg:px-10 lg:py-10">
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0"
                      style={chartFrameStripeStyle}
                    />
                    <div className="flex w-full justify-center">
                      <div className="relative z-10 w-[92%] max-w-[640px]">
                        <Image
                          src={cdnUrl(imageSrc)}
                          alt={imageAlt}
                          width={imageWidth}
                          height={imageHeight}
                          unoptimized
                          className="relative z-30 block h-auto w-full object-contain"
                          sizes="(max-width: 1024px) 100vw, 760px"
                        />
                        {secondaryImageSrc && (
                          <Image
                            src={cdnUrl(secondaryImageSrc)}
                            alt={secondaryImageAlt ?? ''}
                            width={imageWidth}
                            height={imageHeight}
                            unoptimized
                            className="relative z-20 -mt-8 ml-16 block h-auto w-[82%] object-contain lg:ml-32"
                            sizes="(max-width: 1024px) 100vw, 630px"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Separator */}
      <div className="container mx-auto px-4 hidden lg:block">
        <div className="w-full h-px bg-[#546087]/30" />
      </div>
    </div>
  );
};

export default FeatureSection;
