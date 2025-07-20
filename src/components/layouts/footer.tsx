import { useEffect, useRef, useState } from "react";
import logo from "@/assets/d21-logo-np.webp";
import { Button } from "../ui/button";
import { ArrowUp, MapPin, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { RiFacebookCircleLine, RiInstagramLine } from "react-icons/ri";
function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const [toTopTrigger, showToTopTrigger] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      showToTopTrigger(entry.isIntersecting);
    });

    if (footerRef.current) observer.observe(footerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-black text-white min-h-screen relative overflow-hidden p-4 flex flex-col gap-4"
    >
      <img src={logo} alt="d21" className="max-w-[50vw] pt-1" />
      <section className="px-3 flex flex-col gap-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d968.4827911520041!2d121.2390017!3d13.8431704!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd158cfcba7ed5%3A0x2548a71da5ee87a3!2sD21%20Fitness%20Gym!5e0!3m2!1sen!2sph!4v1752682689912!5m2!1sen!2sph&map-controls=false"
          width="100%"
          height="200"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="flex items-center gap-2">
          <MapPin size={48} />
          <p>
            D21 Fitness Gym, Brgy. San Carlos, Rosario, Batangas. (2nd floor of
            RnD Supermarket)
          </p>
        </div>
      </section>
      <section className="flex flex-col gap-4 px-3">
        <h1 className="text-xl">Reach us!</h1>
        <div className="flex flex-col gap-4">
          <div className="flex gap-4 items-center">
            <RiFacebookCircleLine size={26} />
            <a href="https://www.facebook.com/profile.php?id=100065512358959">
              D21 Fitness Gym
            </a>
          </div>
          <div className="flex gap-4 items-center">
            <RiInstagramLine size={26} />
            <a href="https://www.instagram.com/d21_fitnessgym">
              @d21_fitnessgym
            </a>
          </div>
          <div className="flex gap-4 items-center">
            <Phone />
            <a href="tel:09958944773">0995 894 4773</a>
          </div>
        </div>
      </section>
      <Button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={cn(
          "fixed bottom-0 right-0 transition-all",
          !toTopTrigger
            ? "opacity-0 translate-x-full"
            : "opacity-100 translate-x-0"
        )}
      >
        <ArrowUp />
        Scroll to top
      </Button>
    </footer>
  );
}

export default Footer;
