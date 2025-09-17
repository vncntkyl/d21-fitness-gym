import gymBg from "@/assets/gym-1.jpg"; // hero background
import gym1 from "@/assets/gym-2.jpg"; // sample gallery image
import gym2 from "@/assets/gym-3.jpg";
import gym3 from "@/assets/gym-4.jpg";
import team1 from "@/assets/gym-1.jpg"; // team photo samples
import team2 from "@/assets/gym-2.jpg";

const coreValues = [
  { title: "Discipline", desc: "Stay consistent, stay focused." },
  { title: "Community", desc: "We grow stronger together." },
  { title: "Growth", desc: "Always improve, inside and out." },
  { title: "Respect", desc: "Everyone is welcome here." },
  { title: "Integrity", desc: "We do what’s right, always." },
  { title: "Empowerment", desc: "You’re stronger than you think." },
  { title: "Innovation", desc: "We keep fitness fresh and exciting." },
];

export default function About() {
  return (
    <div className="w-full flex flex-col text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center text-center text-white">
        <img
          src={gymBg}
          alt="D21 Gym"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative z-10 max-w-3xl px-4">
          <h1 className="text-5xl font-bold mb-4">About D21 Fitness Gym</h1>
          <p className="text-lg leading-relaxed">
            A space where passion meets purpose, where beginners and athletes
            train side by side, and where every rep brings you closer to the
            strongest version of you.{" "}
            <span className="font-semibold">
              D21 is more than fitness — it's your next chapter.
            </span>
          </p>
        </div>
      </section>

      {/* About & History */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Our Story</h2>
        <p className="text-lg leading-relaxed mb-4">
          D21 Fitness Gym was founded by twin brothers <strong>Don and Dustin
            Aguado</strong>, who were both 21 years old at the time. The name
          "D21" reflects the shared initial "D" in their first names and their
          age when they founded the gym.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Passionate basketball athletes and fitness enthusiasts, the Aguado
          brothers built D21 Fitness Gym to provide a space that blends sports
          training with comprehensive fitness. Their dedication to physical
          conditioning and performance excellence inspired them to create a
          facility that caters to both athletes and individuals committed to a
          healthy lifestyle.
        </p>
        <p className="text-lg leading-relaxed">
          Located in <strong>Rosario, Batangas</strong>, the gym spans{" "}
          <strong>360 square meters</strong> and offers a fully
          air-conditioned, functional training space equipped with a complete
          set of gym equipment, along with shower facilities.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-3">Our Mission</h3>
            <p>
              To empower individuals of all fitness levels to lead healthier,
              stronger, and more confident lives through an accessible,
              effective and inspiring environment.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-3">Our Vision</h3>
            <p>
              To build a fit and motivated community where everyone can grow and
              succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Our Core Values</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {coreValues.map((value, i) => (
            <div
              key={i}
              className="rounded-xl bg-gray-50 p-6 shadow hover:shadow-md transition"
            >
              <h4 className="text-xl font-bold mb-2">{value.title}</h4>
              <p className="text-gray-600">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gym Details */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Gym Details</h2>
          <p className="mb-2">
            📍 Location: <strong>Rosario, Batangas</strong>
          </p>
          <p className="mb-2">
            🏋️ Space: <strong>360 sqm fully air-conditioned facility</strong>
          </p>
          <p className="mb-2">
            🚿 Amenities: <strong>Complete gym equipment + shower facilities</strong>
          </p>
          <p>
            🕒 Hours: <strong>Mon–Sat: 6:00 AM – 9:00 PM | Sun: 6:00 AM – 5:00 PM</strong>
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Gallery</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          <img src={gym1} alt="Gym 1" className="rounded-lg shadow-md" />
          <img src={gym2} alt="Gym 2" className="rounded-lg shadow-md" />
          <img src={gym3} alt="Gym 3" className="rounded-lg shadow-md" />
        </div>
      </section>

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
