import gym1 from "@/assets/gym-2.jpg";
import gym2 from "@/assets/gym-3.jpg";
import gym3 from "@/assets/gym-4.jpg";
import Header from "@/components/layouts/header";
import { Button } from "@/components/ui/button";
import { useScreenWidth } from "@/context/screenWidthContext";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const images = [gym1, gym2, gym3, gym1, gym2]; // 5 panels

function Gym() {
  const scrollRef = useRef(null);
  const { isMD } = useScreenWidth();
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  // scrollYProgress 0 → 1 mapped to 0% → -400% (for 5 panels, shift 4 full widths)
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    isMD ? ["0%", "-61%"] : ["0%", "-80.5%"]
  );

  return (
    <section ref={scrollRef} className="relative h-[500vh] pb-8 md:h-[250vh] md:pb-0">
      {/* Sticky container that will animate the motion div */}
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col gap-8 md:gap-4">
        <Header text="The Gym" className="pt-4" />
        <p className="text-center relative bg-white pb-4">
          Located in Rosario, Batangas, this 360 sqm fully equipped,
          air-conditioned facility blends sports and fitness for everyone
          striving to stay active and strong.
        </p>

        {/* Animated horizontal scroll */}
        <motion.div
          style={{ x }}
          className="flex h-[60vh] w-[500vw] gap-8 px-4 md:w-[250vw]"
        >
          {images.map((img, index) => (
            <div
              key={index}
              className="w-screen h-full flex items-center justify-center"
            >
              <img
                src={img}
                alt={`Gym ${index}`}
                className="h-full w-full object-cover border border-primary [clip-path:polygon(0_0,calc(100%_-_16px)_0,100%_16px,100%_100%,16px_100%,0_calc(100%_-_16px))]"
              />
            </div>
          ))}
        </motion.div>
        <Button className="text-white mx-auto px-4 py-6">Explore more</Button>
      </div>
    </section>
  );
}

export default Gym;
