import gym1 from "@/assets/gym-2.jpg";
import gym2 from "@/assets/gym-3.jpg";
import gym3 from "@/assets/gym-4.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import AutoPlay from "embla-carousel-autoplay";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function Gym() {
  const details = [
    <p key="loc">
      Located in the bustling area of{" "}
      <span className="font-bold">Rosario, Batangas</span>, surrounded by shops,
      food businesses, and essentials to fit your lifestyle.
    </p>,
    <p key="space">
      A spacious{" "}
      <span className="font-bold">360 sqm fully air-conditioned facility</span>{" "}
      designed to keep you comfortable while you focus on your workout.
    </p>,
    <div key="amenities">
      <span>
        From essential gym equipment to shower facilities, we've got everything
        you need for a comfortable fitness experience.
      </span>
      <div>
        <p>Members Benefits</p>
        <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Treadmills</li>
            <li>Stationary Bikes</li>
            <li>Free Weights (Dumbbells & Barbells)</li>
            <li>Squat Racks</li>
            <li>Bench Press Stations</li>
            <li>Cable Machines</li>
            <li>Leg Press</li>
            <li>Smith Machine</li>
            <li>Pull-up Bars</li>
            <li>Rowing Machine</li>
            <li>Kettlebells</li>
            <li>Medicine Balls</li>
            <li>Resistance Bands</li>
            <li>Yoga Mats</li>
        </ul>
      </div>
    </div>,
    <div key="hours">Flexible hours so you never miss a workout.</div>,
  ];

  const images = [gym1, gym2, gym3];

  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={containerRef}
      className="bg-neutral-100 grid grid-cols-2 h-[400vh]"
    >
      {/* LEFT sticky details */}
      <div className="sticky top-0 h-screen max-w-5xl py-16 px-16 flex flex-col justify-center">
        <h2 className="text-3xl font-semibold mb-8 uppercase lg:text-4xl font-audiowide underline underline-offset-8 leading-relaxed decoration-primary">
          The Gym
        </h2>
        <div className="relative h-70">
          {details.map((Detail, i) => {
            const start = i / details.length;
            const mid = (i + 0.5) / details.length;
            const end = (i + 1) / details.length;

            const opacity = useTransform(
              scrollYProgress,
              [start, mid, end],
              i === 0 ? [1, 1, 0] : [0, 1, 0]
            );

            return (
              <motion.div
                key={i}
                style={{ opacity }}
                className="absolute top-0 left-0 w-full text-lg"
              >
                {Detail}
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* RIGHT sticky carousel */}
      <section className="sticky top-0 h-screen flex items-center justify-center">
        <Carousel plugins={[AutoPlay({ delay: 1500 })]}>
          <CarouselContent>
            {images.map((image) => (
              <CarouselItem key={image}>
                <img
                  src={image}
                  alt={image}
                  className="w-full h-screen object-cover"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>
    </section>
  );
}

export default Gym;
