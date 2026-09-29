'use client';

import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import type { TeamMember, FilterColor } from '@/data/team';
import { cdnUrl } from '@/util/cdn';

interface TeamMemberCardProps {
  member: TeamMember;
}

const filterClassnames: Record<FilterColor, string> = {
  blue: 'hue-rotate-[140deg] brightness-[65%] saturate-200 contrast-125',
  orange: 'hue-rotate-[-5deg] brightness-[70%] contrast-[1.25] saturate-[2.5]',
  red: 'hue-rotate-[-50deg] brightness-[55%] contrast-125 saturate-200'
};

const TeamMemberCard = ({ member }: TeamMemberCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hasSpaceLeft, setHasSpaceLeft] = useState(true);
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  const resizeTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const listener = () => {
      if (resizeTimeout.current) {
        clearTimeout(resizeTimeout.current);
      }

      resizeTimeout.current = setTimeout(() => {
        setScreenWidth(window.innerWidth);
      }, 200);
    };

    window.addEventListener('resize', listener);

    return () => {
      if (resizeTimeout.current) {
        clearTimeout(resizeTimeout.current);
      }
      window.removeEventListener('resize', listener);
    };
  }, []);

  useEffect(() => {
    if (cardRef.current && screenWidth > 0) {
      const cardLeft = cardRef.current?.getBoundingClientRect().left || 0;
      const cardWidth = cardRef.current?.getBoundingClientRect().width || 250;

      const newHasSpaceLeft = screenWidth - (cardLeft + cardWidth + 250) > 0;

      if (newHasSpaceLeft !== hasSpaceLeft) {
        setHasSpaceLeft(newHasSpaceLeft);
      }
    }
  }, [cardRef, screenWidth, hasSpaceLeft]);

  return (
    <div className="relative w-[250px] min-h-[330px] group">
      <div
        className={`w-max absolute group-hover:h-max h-[330px] sm:group-hover:h-[250px] ${
          hasSpaceLeft
            ? 'overflow-y-hidden'
            : 'overflow-y-hidden group-hover:overflow-y-visible'
        } flex-col sm:group-hover:flex-row justify-start items-start gap-y-6 group-hover:gap-y-0 gap-x-[10px] inline-flex shadow-none group-hover:shadow-card-light rounded-lg transition-shadow duration-300`}
        ref={cardRef}
      >
        <div
          className={`w-[250px] h-[250px] shrink-0 justify-center items-center inline-flex overflow-hidden relative filter group-hover:filter-none ${
            filterClassnames[member.filter]
          } transition-all duration-300 rounded-lg`}
        >
          <Image
            src={cdnUrl(member.image)}
            alt={`${member.name} Profile Picture`}
            className="filter group-hover:filter-none brightness-75 sepia object-cover w-full h-full transition-all duration-300"
            width={250}
            height={250}
            unoptimized
            title={member.name}
          />
        </div>
        <div className="w-fulltransition-all duration-300 group-hover:hidden px-2 pt-2">
          <span className="text-[#1a1a2e] text-xl font-bold font-geist leading-7">
            {member.name}
            <br />
          </span>
          <span className="text-[#546087] text-base font-normal font-geist leading-7">
            {member.position}
          </span>
        </div>
        <div
          className={`w-[250px] ${
            !hasSpaceLeft
              ? 'sm:group-hover:absolute sm:group-hover:right-full'
              : ''
          } overflow-hidden sm:w-0 sm:group-hover:w-[250px] group-hover:h-max h-0 sm:h-[250px] sm:group-hover:h-[250px] bg-white z-40 transition-all duration-300 flex items-center p-[12px] sm:p-0 sm:group-hover:p-[12px] rounded-lg`}
        >
          <div
            className="opacity-0 group-hover:opacity-100 transition-all duration-300 sm:delay-300 w-[250px] text-[15px] leading-[22px] text-[#546087] font-geist"
            dangerouslySetInnerHTML={{ __html: member.bio }}
          />
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
