import { Button } from "@/components/ui/button";

// components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span class="text-xl">Software Developer</span>
            <h1 className="h1">
              Hello I&apos;m <br />{" "}
              <span className="text-accent">Diego Felix</span>
            </h1>
            <p className="max-w-[500x] mb-9 text-white/80">
              I’ve been a web developer since 2009, specializing in building
              scalable, high-performance applications. Currently, I’m a Tech
              Leader at Leroy Merlin, leading teams to deliver innovative
              solutions. My core strength is in PHP and Laravel, and I’m now
              expanding my knowledge in frontend frameworks like Next.js and
              React.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* text */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
