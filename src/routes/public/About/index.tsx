import team1 from "@/assets/gym-1.jpg"; // team photo samples
import team2 from "@/assets/gym-2.jpg";
import Hero from "./hero";
import Summary from "./summary";
import CoreValues from "./core";
import Gym from "./gym";

export default function About() {
  return (
    <div className="w-full flex flex-col text-gray-800">
      {/* Hero Section */}
      <Hero />
      <Summary />
      {/* Core Values */}
      <CoreValues />
      {/* Gym Details */}
      <Gym />
      {/* Team */}
      <section className="py-16 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-10">Meet Our Team</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="text-center">
            <img
              src={team1}
              alt="Team Member 1"
              className="w-40 h-40 mx-auto rounded-full object-cover mb-4"
            />
            <h4 className="font-semibold">Don Aguado</h4>
            <p className="text-sm text-gray-600">Co-Founder</p>
          </div>
          <div className="text-center">
            <img
              src={team2}
              alt="Team Member 2"
              className="w-40 h-40 mx-auto rounded-full object-cover mb-4"
            />
            <h4 className="font-semibold">Dustin Aguado</h4>
            <p className="text-sm text-gray-600">Co-Founder</p>
          </div>
          {/* Add more team members as needed */}
        </div>
      </section>
    </div>
  );
}
