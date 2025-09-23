import ProfileSidebar from "@/components/layouts/sidebar.profile";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../Dashboard";
import Account from "../Account";
import Attendance from "../Attendance";
import Membership from "../Membership";
import Workout from "../Workout";
import Settings from "../Settings";

function Main() {
  return (
    <main className="relative w-full mt-20 min-h-[75vh] container mx-auto border grid p-4">
      <ProfileSidebar>
        <Routes>
          <Route index element={<Dashboard />} />
          <Route path="account" element={<Account />} />
          <Route path="attendance" element={<Attendance />} />
          <Route path="membership" element={<Membership />} />
          <Route path="routine" element={<Workout />} />
          <Route path="settings" element={<Settings />} />
        </Routes>
      </ProfileSidebar>
    </main>
  );
}

export default Main;
