import { Button } from "@/components/ui/button";
import { equipment, programs, services } from "@/data/test/subscriptions.test";
import {
  BicepsFlexed,
  Dumbbell,
  ShowerHead,
  type LucideProps,
} from "lucide-react";
import { Link } from "react-router-dom";

function Pricing() {
  return (
    <section className="py-16 px-6 container mx-auto">
      <h2 className="text-2xl font-semibold mb-8 uppercase text-center font-audiowide underline underline-offset-8 leading-relaxed decoration-primary">
        Here's what's waiting for you
      </h2>
      <p className="text-sm leading-relaxed mb-8 text-center">
        One year. One goal. Endless results.
        <br />
        Get your annual membership at D21 Fitness Gym for just{" "}
        <span className="font-semibold">₱1,000.</span>
      </p>
      <div className="flex flex-col items-center gap-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
          <BenefitList data={equipment} icon={Dumbbell} title="Equipment" />
          <BenefitList data={programs} icon={BicepsFlexed} title="Programs" />
          <BenefitList data={services} icon={ShowerHead} title="Services" />
        </div>
        <Button size="sm" className="justify-end hover:bg-primary/70" asChild>
          <Link to="/registrations">Get Started</Link>
        </Button>
      </div>
    </section>
  );
}

function BenefitList({
  data,
  icon: Icon,
  title,
}: {
  data: string[];
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  title: string;
}) {
  return (
    <section className="space-y-4">
      <header className="flex items-center uppercase font-semibold gap-2 pb-2 border-b-2 border-b-primary">
        <Icon />
        <span>{title}</span>
      </header>
      <main>
        {data.map((item) => {
          return <p key={item}>{item}</p>;
        })}
      </main>
    </section>
  );
}

export default Pricing;
