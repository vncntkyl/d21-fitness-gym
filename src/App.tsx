import Navbar from "@/components/layouts/navbar";
import { BrowserRouter } from "react-router-dom";
import {
  MembershipPlans,
  Hero,
  Stats,
  About,
  Gym,
  Registration,
} from "./routes/public/Home";
import Footer from "./components/layouts/footer";
import { ScreenWidthProvider } from "./context/screenWidthContext";
function App() {
  return (
    <BrowserRouter>
      <ScreenWidthProvider>
        <div>
          <Navbar />
          <main>
            <Hero />
            {/* Bleed Transition */}
            <div className="h-40 -mt-20 bg-gradient-to-b from-transparent via-40% via-black from-0% to-black " />
            <Stats />
            <MembershipPlans />
            <About />
            <Gym />
            <Registration />
          </main>
          <Footer />
        </div>
      </ScreenWidthProvider>
    </BrowserRouter>
  );
}

export default App;
