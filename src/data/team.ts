export type FilterColor = 'blue' | 'orange' | 'red';

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  image: string;
  filter: FilterColor;
}

export const teamMembers: TeamMember[] = [
  {
    id: 'nikolay',
    name: 'Nikolay',
    position: 'Founder & CEO',
    bio: 'Hey hey! <b>@Nikolay</b> here. I\'m a father of 2 amazing children - Yavor & Vyara - and a husband to my lovely wife, Vesi. The biggest lesson I\'ve learned - failure should never be an option. Ask me "why" when we meet.',
    image: '/images/team/core/nikolay.webp',
    filter: 'red'
  },
  {
    id: 'deyan',
    name: 'Deyan',
    position: 'Software Engineer',
    bio: "Hey, I'm <b>@Deyan</b>, and I am super excited to join the fantastic RipeText team as a Software Engineer! Ready to dive in and code some magic!",
    image: '/images/team/core/deyan.webp',
    filter: 'orange'
  }
];
