import {
  BicepsFlexed,
  CalendarCog,
  ClipboardClock,
  ContactRound,
  FileUser,
  IdCardLanyard,
  Images,
  LayoutDashboard,
  Settings2,
  Tag,
  UsersRound,
} from "lucide-react";

// Menu items.
export const links = [
  {
    title: "Dashboard",
    url: "/admin",
    icon: LayoutDashboard,
  },
  {
    group: "users",
    items: [
      {
        title: "Registrations",
        url: "/admin/registrations",
        icon: ContactRound,
      },
      {
        title: "Staff Scheduling",
        url: "/admin/staff_scheduling",
        icon: CalendarCog,
      },
      {
        title: "User Attendance",
        url: "/admin/attendance",
        icon: ClipboardClock,
      },
    ],
  },
  {
    group: "gym plans",
    items: [
      {
        title: "Subscriptions",
        url: "/admin/subscriptions",
        icon: FileUser,
      },
      {
        title: "Memberships",
        url: "/admin/memberships",
        icon: IdCardLanyard,
      },
      {
        title: "Personal Trainings",
        url: "/admin/personal_trainings",
        icon: BicepsFlexed,
      },
      {
        title: "Promotions",
        url: "/admin/promotions",
        icon: Tag,
      },
    ],
  },
  {
    group: "system",
    items: [
      {
        title: "Users",
        url: "/admin/users",
        icon: UsersRound,
      },
      {
        title: "Roles",
        url: "/admin/roles",
        icon: Settings2,
      },
      {
        title: "Media",
        url: "/admin/media",
        icon: Images,
      },
    ],
  },
];
