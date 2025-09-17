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
    <footer ref={footerRef} className="bg-black text-white pt-10 relative">
      <div className="container mx-auto grid gap-10 px-6 lg:grid-cols-3 lg:gap-16">
        {/* Logo & About */}
        <div className="flex flex-col gap-4">
          <img
            src={logo}
            alt="d21"
            className="w-full max-w-[180px] brightness-150"
          />
          <p className="text-sm text-gray-400">
            More than fitness — it's your next chapter.
            Train with us and unlock the strongest version of yourself.
          </p>
        </div>

        {/* Location */}
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold">Visit Us</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d968.4827911520041!2d121.2390017!3d13.8431704!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd158cfcba7ed5%3A0x2548a71da5ee87a3!2sD21%20Fitness%20Gym!5e0!3m2!1sen!2sph!4v1752682689912!5m2!1sen!2sph&map-controls=false"
            width="100%"
            height="180"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg shadow-md"
          ></iframe>
          <div className="flex gap-2">
            <MapPin size={20} className="text-primary shrink-0" />
            <p className="text-sm">
              2nd Floor RnD Supermarket, Brgy. San Carlos, Rosario, Batangas
            </p>
          </div>
        </div>

        {/* Contact & Social */}
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold">Reach Us</h2>
          <div className="flex flex-col gap-3 text-sm">
            <a
              href="https://www.facebook.com/profile.php?id=100065512358959"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <RiFacebookCircleLine size={22} />
              D21 Fitness Gym
            </a>
            <a
              href="https://www.instagram.com/d21_fitnessgym"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <RiInstagramLine size={22} />
              @d21_fitnessgym
            </a>
            <a
              href="tel:09958944773"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Phone size={20} />
              0995 894 4773
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 mt-10 py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} D21 Fitness Gym. All rights reserved.
      </div>

      {/* Scroll to top */}
      <Button
        size="icon"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={cn(
          "fixed bottom-6 right-6 rounded-full shadow-lg",
          !toTopTrigger
            ? "opacity-0 translate-y-10 pointer-events-none"
            : "opacity-100 translate-y-0"
        )}
      >
        <ArrowUp />
      </Button>
    </footer>
  );
}

export default Footer;
