import Hero from "./hero";
import Pricing from "./pricing";
import Subscriptions from "./subscriptions";

function Memberships() {
  return (
    <div className="w-full flex flex-col text-gray-800">
      {/* Hero Section */}
      <Hero />
      <Pricing />
      <Subscriptions />
    </div>
  );
}

export default Memberships;
