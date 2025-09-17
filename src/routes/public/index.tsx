import Footer from "@/components/layouts/footer"
import Navbar from "@/components/layouts/navbar"
import { Route, Routes } from "react-router-dom"
import Home from "./Home/home"
import About from "./About"

function Public() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="pricing" element={<Home />} />
                <Route path="programs" element={<Home />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default Public