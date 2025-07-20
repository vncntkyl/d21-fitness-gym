import logo from "@/assets/d21-logo.webp";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { useMediaQuery } from "react-responsive";
import Sidebar from "./sidebar";
import { cn } from "@/lib/utils";
import { items } from "@/data/links";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [open, onOpen] = useState(false);
  const [isHeroDisplayed, setIsHeroDisplayed] = useState(true);

  const isHandheld = useMediaQuery({ maxWidth: 768 });

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      if (current > lastScrollY && current > 50) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Intersection observer logic
  useEffect(() => {
    const heroEl = document.getElementById("hero");
    if (!heroEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroDisplayed(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(heroEl);

    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      animate={{ y: show ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "fixed top-0 transition-all w-full flex items-center justify-center z-50",
        isHeroDisplayed ? "bg-transparent" : "bg-black shadow-lg"
      )}
    >
      <nav className="container flex items-center justify-between px-4">
        <img src={logo} alt="D21 Fitness" className="max-w-20" />
        {isHandheld ? (
          <Sheet open={open} onOpenChange={onOpen}>
            <SheetTrigger>
              <Menu size={30} className="text-primary" />
            </SheetTrigger>
            <Sidebar onOpen={onOpen} />
          </Sheet>
        ) : (
          <section className="flex items-center">
            {items.map((item) => (
              <Button
                key={item.title}
                asChild
                className="bg-transparent justify-end transition-all duration-500 font-menbere font-semibold tracking-wider"
                onClick={() => onOpen(false)}
              >
                <Link to={item.url}>{item.title}</Link>
              </Button>
            ))}
            {!isHeroDisplayed && (
              <Button
                className="px-4 justify-end hover:bg-accent-2 font-audiowide"
                asChild
                // onClick={() => onOpen(false)}
              >
                <Link to="/registrations" >Join us now!</Link>
              </Button>
            )}
          </section>
        )}
      </nav>
    </motion.header>
  );
}

export default Navbar;
