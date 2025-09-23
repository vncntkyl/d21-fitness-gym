import { useAuth } from "@/context/authContext";
import { useMemo } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
  ChevronDown,
  LogOutIcon,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

function NavbarDropdown() {
  const { user, logout } = useAuth();

  const initials = useMemo(() => {
    if (!user) return "NA";

    return user.first_name.substring(0, 1) + user.last_name.substring(0, 1);
  }, [user]);
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger className="flex items-center gap-2 group/collapsible p-2 bg-primary/80 min-w-[3rem] text-white ">
        <User />
        {/* <span className="capitalize">My Hub</span> */}
        <ChevronDown className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-180" />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="min-w-(--radix-dropdown-menu-trigger-width) rounded-none"
      >
        <DropdownMenuLabel className="capitalize flex items-center gap-2">
          <Avatar>
            <AvatarImage src="https://github.com/" />
            <AvatarFallback className="uppercase">{initials}</AvatarFallback>
          </Avatar>
          <span>Hi, {`${user?.first_name}`}!</span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link to="/profile">
            <User />
            <span>Profile</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => logout()}>
          <LogOutIcon />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default NavbarDropdown;
