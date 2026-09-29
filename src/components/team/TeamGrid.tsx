'use client';

import TeamMemberCard from './TeamMemberCard';
import { teamMembers } from '@/data/team';

const TeamGrid = () => {
  return (
    <section className="w-full bg-white py-8 lg:py-16">
      <div className="container px-4 mx-auto">
        <div className="w-full flex justify-center flex-wrap gap-[27px] md:gap-[40px]">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamGrid;
