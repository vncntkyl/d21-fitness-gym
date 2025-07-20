import Navbar from "@/components/layouts/navbar";
import { BrowserRouter } from "react-router-dom";
import { MembershipPlans, Hero } from "./routes/public/Home";
import Footer from "./components/layouts/footer";
import { Dumbbell, Globe, LucideBicepsFlexed } from "lucide-react";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <main>
          <Hero />
          {/* Bleed Transition */}
          <div className="h-40 -mt-20 bg-gradient-to-b from-transparent via-40% via-black from-0% to-black " />
          <div className="min-h-[50vh] -mt-20 flex flex-col items-center p-8 pt-4 bg-black md:flex-row md:justify-center md:gap-12 md:min-h-[25vh] md:pb-14">
            <div className="h-36 grid grid-cols-2 text-white font-menbere w-full md:grid-cols-1 md:place-items-center md:h-48 md:w-60">
              <div className="row-[1/3] flex items-center justify-end pr-8 md:row-auto md:justify-center md:pr-0 md:pb-8">
                <LucideBicepsFlexed size={90} />
              </div>
              <p className="font-audiowide text-5xl mt-auto">
                1k<span className="text-primary">+</span>
              </p>
              <p>Active Members</p>
            </div>
            <div className="h-36 grid grid-cols-2 text-white font-menbere w-full md:grid-cols-1 md:place-items-center md:h-48 md:w-60">
              <div className="row-[1/3] flex items-center justify-end pr-8 md:row-auto md:justify-center md:pr-0 md:pb-8">
                <Dumbbell size={90} />
              </div>
              <p className="font-audiowide text-5xl mt-auto">
                500<span className="text-primary">+</span>
              </p>
              <p>Transformations</p>
            </div>
            <div className="h-36 grid grid-cols-2 text-white font-menbere w-full md:grid-cols-1 md:place-items-center md:h-48 md:w-60">
              <div className="row-[1/3] flex items-center justify-end pr-8 md:row-auto md:justify-center md:pr-0 md:pb-8">
                <Globe size={90} />
              </div>
              <p className="font-audiowide text-5xl mt-auto">
                2.6k<span className="text-primary">+</span>
              </p>
              <p>Expanding Connections</p>
            </div>
          </div>
          <MembershipPlans />
          <section>
            <header className="text-center font-menbere font-bold text-3xl uppercase">
              The D21 Way
            </header>
            <p>About Section</p>
            <p>Built by the </p>
          </section>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
