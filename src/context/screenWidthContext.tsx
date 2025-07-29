import type { ScreenWidthContexTypes } from "@/types/screenWidth";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

const ScreenWidthContext = createContext<ScreenWidthContexTypes | undefined>(
  undefined
);

export const ScreenWidthProvider = ({ children }: { children: ReactNode }) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const values = {
    width,
    isSM: width < 768,
    isMD: width >= 768,
    isLG: width >= 1024,
    isXL: width >= 1280,
    is2XL: width >= 1440,
    is4K: width >= 1536,
  };

  return (
    <ScreenWidthContext.Provider value={values}>
      {children}
    </ScreenWidthContext.Provider>
  );
};

export const useScreenWidth = () => {
  const context = useContext(ScreenWidthContext);

  if (!context)
    throw new Error(
      "useScreenWidth must be used inside a screenWidthProvider."
    );
  return context;
};
