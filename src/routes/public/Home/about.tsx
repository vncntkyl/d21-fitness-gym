import gym from "@/assets/gym-1.jpg";
import community from "@/assets/hero-1.jpg";
import { Button } from "@/components/ui/button";

function About() {
  return (
    <section className="container flex flex-col items-center gap-8 bg-black p-8">
      <header className="text-center font-lexend font-bold text-3xl uppercase border-b-2 border-b-primary italic text-white">
        About D21
      </header>
      <main className="relative">
        <img src={gym} alt="D21 Fitness Gym location" />
        <article className="absolute left-1/2 -translate-x-1/2 font-open-sans text-white p-4 px-6 -mt-32 z-2 bg-primary indent-8 text-justify w-full max-w-xs">
          Started by twin brothers Don and Dustin when they were just 21, D21
          Fitness Gym was built from hustle, heart, and a dream to create
          something bigger than themselves. It's not just a gym — it's a
          movement. A space where passion meets purpose, where beginners and
          athletes train side by side, and where every rep brings you closer to
          the strongest version of you. D21 is more than fitness — it's your
          next chapter
          {/* Located in Rosario, Batangas,
          this 360 sqm fully equipped, air-conditioned facility blends sports
          and fitness for everyone striving to stay active and strong. */}
        </article>
        <img src={community} alt="" />
        <Button className="absolute bottom-0 right-0 text-white">
          Discover the story behind D21
        </Button>
      </main>
    </section>
  );
}

export default About;
