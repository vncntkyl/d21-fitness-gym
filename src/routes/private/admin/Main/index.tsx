import AdminHeader from "@/components/layouts/header.admin";
import AdminSidebar from "@/components/layouts/sidebar.admin";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { useAuth } from "@/context/authContext"
import { Navigate, Route, Routes } from "react-router-dom";
import Users from "../Users";
import Memberships from "../Memberships";
import Subscriptions from "../Subscriptions";

function Main() {
  const { user } = useAuth();
  const token = localStorage.getItem('token');

  if (!user && !token) return <Navigate to="/login" />

  if (!user) return <>Loading...</>
  

  return (
    <SidebarProvider>
      <AdminSidebar />
      <SidebarInset />
      <main className="w-full">
        <AdminHeader />
        <section className="p-4">
          <Routes>
            <Route index element={<>Dashboard</>} />
            <Route path="users/*" element={<Users />} />
            <Route path="memberships/*" element={<Memberships />} />
            <Route path="subscriptions/*" element={<Subscriptions />} />
          </Routes>
        </section>
      </main>

    </SidebarProvider>
  )
}

export default Main