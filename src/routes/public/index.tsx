import Footer from "@/components/layouts/footer";
import Navbar from "@/components/layouts/navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/home";
import About from "./About";
import Memberships from "./Memberships";
import ProtectedRoutes from "@/lib/protectedRoutes";
import Main from "../private/profile/Main";

function Public() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="memberships" element={<Memberships />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="profile/*" element={<Main />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default Public;
