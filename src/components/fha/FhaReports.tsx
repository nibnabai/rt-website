'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { reportTags } from './data';
import { TagCheckIcon, ExportIcon } from './icons';
import { cdnUrl } from '@/util/cdn';

const REPORT_IMAGES = [
  {
    src: cdnUrl('/images/fha-compliance/section-6/top.png'),
    alt: 'PDF report - Executive summary'
  },
  {
    src: cdnUrl('/images/fha-compliance/section-6/middle.png'),
    alt: 'PDF report - Control coverage'
  },
  {
    src: cdnUrl('/images/fha-compliance/section-6/bottom.png'),
    alt: 'PDF report - Violation profile'
  }
];

const MOBILE_IMAGES = [
  {
    src: cdnUrl('/images/fha-compliance/section-6/top-mobile.png'),
    alt: 'PDF report - Executive summary'
  },
  {
    src: cdnUrl('/images/fha-compliance/section-6/middle-mobile.png'),
    alt: 'PDF report - Control coverage'
  },
  {
    src: cdnUrl('/images/fha-compliance/section-6/bottom-mobile.png'),
    alt: 'PDF report - Violation profile'
  }
];

const POSITIONS = [
  { left: '0%', top: '0', zIndex: 3, rotateY: '0deg', scale: 1 },
  { left: '14%', top: '0', zIndex: 2, rotateY: '-25deg', scale: 0.92 },
  { left: '28%', top: '0.7%', zIndex: 1, rotateY: '-40deg', scale: 0.85 }
];

function ReportCarousel() {
  const [order, setOrder] = useState([0, 1, 2]);

  useEffect(() => {
    const interval = setInterval(() => {
      setOrder((prev) => [
        (prev[0] + 1) % 3,
        (prev[1] + 1) % 3,
        (prev[2] + 1) % 3
      ]);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative w-full"
      style={{ paddingBottom: '82.3%', perspective: '1200px' }}
    >
      {REPORT_IMAGES.map((img, imgIndex) => {
        const posIndex = order[imgIndex];
        const pos = POSITIONS[posIndex];
        return (
          <div
            key={img.src}
            className="absolute w-[72%] origin-left will-change-transform"
            style={{
              left: pos.left,
              top: pos.top,
              zIndex: pos.zIndex,
              transform: `rotateY(${pos.rotateY}) scale(${pos.scale})`,
              transition:
                'left 800ms cubic-bezier(0.16, 1, 0.3, 1), top 800ms cubic-bezier(0.16, 1, 0.3, 1), transform 800ms cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={510}
              height={583}
              className="h-auto w-full"
              unoptimized
            />
          </div>
        );
      })}
    </div>
  );
}

function MobileReportCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="relative w-full overflow-hidden">
        <div
          className="flex will-change-transform"
          style={{
            transform: `translateX(-${current * 100}%)`,
            transition: 'transform 800ms cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          {MOBILE_IMAGES.map((img) => (
            <div key={img.src} className="w-full shrink-0 px-2">
              <Image
                src={img.src}
                alt={img.alt}
                width={442}
                height={505}
                className="h-auto w-full"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
      {/* Dots */}
      <div className="flex items-center gap-2">
        {MOBILE_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? 'w-6 bg-[#0caee9]' : 'w-2 bg-[#d1d5db]'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export function FhaReports() {
  return (
    <section id="reports" className="bg-[#f4f5f6] py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-8">
        <div className="grid grid-cols-1 gap-[50px] lg:grid-cols-12 lg:gap-16">
          {/* Left column - text content */}
          <div className="order-1 lg:col-span-5">
            <p className="font-mono text-xs font-normal uppercase leading-4 tracking-[2.4px] text-[#0caee9]">
              06 · Reports
            </p>
            <h2 className="mt-[8px] font-display text-[40px] leading-[40px] tracking-[-1.2px] text-[#151a28] lg:mt-[24px] lg:text-[48px] lg:leading-[48px]">
              Detailed PDF reports —{' '}
              <em className="font-display italic">ready to use.</em>
            </h2>
            <p className="mt-[25px] text-[14px] leading-[18px] text-[#636a7e] lg:text-[18px] lg:leading-[28px]">
              We automatically generate structured PDF reports with all
              information clearly organized, categorized, and explained for your
              convenience.
            </p>
            <p className="mt-[10px] text-[14px] leading-[18px] text-[#636a7e] lg:mt-[16px] lg:text-[18px] lg:leading-[28px]">
              Every report is designed to save you time and simplify complex
              documentation. All important details are already sorted,
              formatted, and presented in a professional way — helping you
              quickly understand the situation and make informed decisions.
            </p>

            {/* Tags */}
            <div className="mt-[26px] flex flex-wrap items-center gap-x-[8px] gap-y-[8px] lg:mt-[68px]">
              {reportTags.map((tag) => (
                <div
                  key={tag}
                  className="inline-flex items-center gap-1.5 rounded-full border border-[#e3e6ed] bg-white px-3 py-1.5 text-xs font-medium text-[#151a28] shadow-[0px_1px_1px_rgba(21,26,40,0.04)]"
                >
                  <TagCheckIcon />
                  {tag}
                </div>
              ))}
            </div>

            {/* Export tag */}
            <div className="mt-[32px] inline-flex items-center gap-2 rounded-full border border-[#e3e6ed] bg-white px-3 py-1.5 text-xs font-medium text-[#636a7e] shadow-[0px_1px_1px_rgba(21,26,40,0.04)] lg:mt-[52px]">
              <ExportIcon />
              Export-ready · audit-friendly · shareable
            </div>
          </div>

          {/* Right column - stacked PDF report images (Desktop) */}
          <div className="relative order-2 hidden pt-[56px] lg:col-span-7 lg:block">
            <ReportCarousel />
          </div>

          {/* Right column - stacked PDF report images (Mobile) */}
          <div className="order-2 lg:hidden">
            <MobileReportCarousel />
          </div>
        </div>
      </div>
    </section>
  );
}
