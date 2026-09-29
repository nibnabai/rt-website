import { HeroDiagram } from './HeroDiagram';

const HeroAnimationSection = () => {
  return (
    <section
      id="how-it-connects"
      className="w-full scroll-mt-20 bg-[#f6f6f9] pb-16 pt-8 lg:pb-24 lg:pt-12"
    >
      <div className="mx-auto max-w-[1400px] px-5 lg:px-8">
        <div className="flex justify-center">
          <HeroDiagram />
        </div>
      </div>
    </section>
  );
};

export default HeroAnimationSection;
