// ScrollToTop.tsx (or .jsx)
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // scrolls to top whenever pathname changes
  }, [pathname]);

  return null;
}
