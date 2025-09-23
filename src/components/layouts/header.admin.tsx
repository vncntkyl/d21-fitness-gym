import { SidebarTrigger } from "../ui/sidebar";
import { Separator } from "../ui/separator";
import Breadcrumbs from "./breadcrumb";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { useAuth } from "@/context/authContext";
import { useMemo } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { ChevronDown, LogOutIcon, SquareArrowOutUpRight } from "lucide-react";

function AdminHeader() {
  const { user, logout } = useAuth();

  const initials = useMemo(() => {
    if (!user) return "NA";

    return user.first_name.substring(0, 1) + user.last_name.substring(0, 1);
  }, [user]);
  return (
    <header className="flex h-15 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear  group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height) py-[0.45rem]">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <Breadcrumbs />
        <div className="ml-auto flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2 group/collapsible border rounded p-1">
              <Avatar className="rounded">
                <AvatarFallback className="uppercase rounded">
                  {initials}
                </AvatarFallback>
              </Avatar>
              <span className="capitalize">{`${user?.first_name}`}</span>
              <ChevronDown className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-180" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-(--radix-dropdown-menu-trigger-width)">
              <DropdownMenuItem asChild>
                <a href="/" target="_blank">
                  <SquareArrowOutUpRight />
                  <span>Visit Site</span>
                </a>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => logout()}>
                <LogOutIcon />
                <span>Logout</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}

export default AdminHeader;
