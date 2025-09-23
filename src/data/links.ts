import {
  BicepsFlexed,
  CalendarCheck2,
  IdCard,
  LayoutDashboard,
  Settings,
  UserCircle,
} from "lucide-react";

export const items = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Why D21",
    url: "/about",
  },
  {
    title: "Memberships",
    url: "/memberships",
  },
  // {
  //   title: "Programs",
  //   url: "/programs",
  // },
];

export const profile_items = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Account", url: "/account", icon: UserCircle },
  { title: "Attendance", url: "/attendance", icon: CalendarCheck2 },
  { title: "Membership Info", url: "/membership", icon: IdCard },
  { title: "Workout Plan", url: "/routine", icon: BicepsFlexed },
  // { title: "Settings", url: "/settings", icon: Settings },
];
