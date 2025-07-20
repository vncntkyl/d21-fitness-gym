import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <section
      id="hero"
      className="h-screen  bg-[url('@/assets/hero-2.webp')] bg-[center_right_15%] lg:bg-[center_left_0%] bg-cover flex items-center"
    >
      <div className="bg-black/60 h-full w-full flex items-center justify-center">
        <div className="container flex flex-col gap-2 justify-center items-start p-4 font-menbere">
          <h1 className="text-white text-2xl lg:text-4xl font-semibold leading-[1.75]">
            Built by Athletes.
            <br />
            Made for {" "}
            <span className="text-primary font-semibold text-3xl lg:text-5xl">
              Everyone.
            </span>
          </h1>
          <Button
            className="shadow-[4px_4px_0_2px_#FFF] px-4 justify-end hover:bg-accent-2"
            asChild
          >
            <Link to="/registrations" className="font-menbere">
              Join us now!
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
