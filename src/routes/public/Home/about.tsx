import Header from "@/components/layouts/header";
import { Button } from "@/components/ui/button";

function About() {
  return (
    <div className="bg-black min-h-[50vh] bg-fixed bg-cover bg-center bg-[url('@/assets/gym-1.jpg')]">
      <div className="w-full bg-black/50 p-8 h-full lg:p-0">
        <div className="container mx-auto h-full lg:flex">
          <main className="flex gap-8 flex-col text-white justify-between h-full lg:p-4">
            <Header text="About D21" className="text-white" />
            {/* Tagline */}
            <div className="flex flex-col gap-8">

              <p className="text-center max-w-8xl mx-auto text-xl text-gray-200 leading-relaxed xl:mb-12 xl:mt-4">
                A space where passion meets purpose, where beginners and athletes train side by side,
                and where every rep brings you closer to the strongest version of you.
                <span className="font-semibold text-white"> D21 is more than fitness — it's your next chapter.</span>
              </p>

              <div className="grid gap-8 md:grid-cols-2">
                {/* Mission & Vision */}
                <div className="bg-red-900/20 p-4 border-4 border-red-400/50 backdrop-blur-[2px] min-h-[200px] text-lg">
                  <h3 className="text-2xl font-semibold mb-2">Our Mission</h3>
                  <p className="text-gray-200 leading-relaxed">
                    To empower individuals of all fitness levels to lead healthier,
                    stronger, and more confident lives through an accessible,
                    effective and inspiring environment.
                  </p>
                </div>
                <div className="bg-red-900/20 p-4  border-4 border-red-400/50 backdrop-blur-[2px] min-h-[200px] text-lg">
                  <h3 className="text-2xl font-semibold mb-2">Our Vision</h3>
                  <p className="text-gray-200 leading-relaxed">
                    To build a fit and motivated community where everyone can grow
                    and succeed.
                  </p>
                </div>
              </div>
            </div>
            <Button className="mt-auto md:mt-0 md:w-fit md:p-6 md:mx-auto">Discover the story behind D21</Button>
          </main>
        </div>
      </div>
    </div>
  );
}

export default About;
