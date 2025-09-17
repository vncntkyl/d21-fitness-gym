import About from "./about"
import Gym from "./gym"
import Hero from "./hero"
import MembershipPlans from "./membership"
import Registration from "./registration"
import Stats from "./stats"

function Home() {
    return (
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
    )
}

export default Home