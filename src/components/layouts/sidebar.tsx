import logo from "@/assets/d21-logo.webp";
import { SheetContent, SheetTitle } from "../ui/sheet";
import { items } from "@/data/links";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { UserCircle } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";

function Sidebar({ onOpen }: { onOpen: Dispatch<SetStateAction<boolean>> }) {
  return (
    <SheetContent className="bg-black px-4 gap-0" aria-describedby={undefined}>
      <SheetTitle>
        <img src={logo} alt="D21 Fitness" className="max-w-20" />
      </SheetTitle>
      <div className="w-full h-full flex flex-col gap-4 font-audiowide">
        <div className="flex items-center justify-end gap-4 px-4">
          <Link to="/login" className="text-white flex flex-col items-center">
            <UserCircle size={24} />
            {/* <p className="font-menbere uppercase text-2xs">Profile</p> */}
          </Link>
        </div>
        {items.map((item) => (
          <Button
            key={item.title}
            asChild
            className="bg-black justify-end uppercase transition-all duration-500 border-b-2 border-b-black hover:border-b-primary hover:text-primary hover:bg-black relative group"
            onClick={() => onOpen(false)}
          >
            <Link to={item.url}>{item.title}</Link>
          </Button>
        ))}
        <Button
          className="shadow-[4px_4px_0_2px_#FFF] px-4 justify-end hover:bg-accent-2"
          asChild
          onClick={() => onOpen(false)}
        >
          <Link to="/registrations">Join us now!</Link>
        </Button>
      </div>
    </SheetContent>
  );
}

export default Sidebar;
