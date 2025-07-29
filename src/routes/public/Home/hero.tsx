import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <section
      id="hero"
      className="h-screen  bg-[url('@/assets/hero-2.webp')] bg-[center_right_15%] lg:bg-[center_left_0%] bg-cover flex items-center"
    >
      <div className="bg-black/60 h-full w-full flex items-center justify-center">
        <div className="container flex flex-col justify-center items-start p-4 gap-8">
          <h1 className="text-white text-6xl font-lexend uppercase space-y-2">
            <p className="tracking-tighter text-4xl font-semibold pl-2">
              Built by
            </p>
            <p
              className="font-bold text-primary italic before:content-[attr(data-text)] relative before:absolute before:left-[3px] before:text-white"
              data-text="Athletes"
            >
              Athletes
            </p>
            <p className="tracking-tight text-4xl font-semibold pl-2">
              Made for
            </p>
            <p
              className="font-bold text-primary italic before:content-[attr(data-text)] relative before:absolute before:left-[3px] before:text-white"
              data-text="Everyone"
            >
              Everyone
            </p>
          </h1>
          <Button
            className="shadow-[4px_4px_0_2px_#FFF] ml-2 p-6 justify-end hover:bg-accent-2"
            asChild
          >
            <Link to="/registrations" className="font-lexend text-xl uppercase">
              Join us now!
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
