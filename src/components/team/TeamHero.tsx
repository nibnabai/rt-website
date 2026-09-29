'use client';

import { useEffect, useRef, useState } from 'react';

const TeamHero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      className="relative z-20 w-full flex flex-col items-center text-center overflow-visible bg-white pt-[60px] lg:pt-[120px] pb-8 lg:pb-16"
    >
      {/* Background Blob - Top Right */}
      <div className="absolute top-20 right-0 z-0 pointer-events-none">
        <div
          className={`w-24 h-40 lg:w-80 lg:h-96 opacity-80 bg-linear-to-b from-purple-500/0 to-purple-500/10 rounded-l-[48px] lg:rounded-l-[75px] backdrop-blur-[2px] lg:backdrop-blur-sm ${
            hasAnimated ? 'animate-float-once' : ''
          }`}
        />
      </div>

      {/* Background Blob - Bottom Left */}
      <div className="absolute bottom-0 left-0 z-0 pointer-events-none">
        <div
          className={`w-24 h-40 lg:w-80 lg:h-96 opacity-80 bg-linear-to-t from-purple-500/0 to-purple-500/10 rounded-r-[37px] lg:rounded-r-[75px] backdrop-blur-[2px] lg:backdrop-blur-sm ${
            hasAnimated ? 'animate-float-once-slow [animation-delay:1s]' : ''
          }`}
        />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <h1 className="font-display font-semibold text-[52px] lg:text-[72px] leading-[102%] tracking-tight text-[#1a1a2e] mb-6">
          The{' '}
          <span className="bg-linear-to-r from-[#B170DD] to-[#8678E0] bg-clip-text text-transparent">
            Team
          </span>{' '}
          Building
          <br />
          The{' '}
          <span className="bg-linear-to-r from-[#8678E0] to-[#4D6DD5] bg-clip-text text-transparent">
            Future
          </span>
        </h1>
      </div>
    </section>
  );
};

export default TeamHero;
