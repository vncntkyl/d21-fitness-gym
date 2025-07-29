import SubscriptionCards from "@/components/routes/memberships/cards";
import StackedDragCarousel from "@/components/routes/memberships/stackedCards";
import { Button } from "@/components/ui/button";
import { useScreenWidth } from "@/context/screenWidthContext";
import { Link } from "react-router-dom";

function MembershipPlans() {
  const { isSM, isMD, isXL } = useScreenWidth();
  return (
    <section className="flex flex-col gap-4 p-8">
      <header className="text-center font-lexend font-bold text-3xl uppercase border-b-2 border-b-primary italic">
        Choose your grind
      </header>
      <p className="text-center">
        Whether you're a student or a pro, we've got a membership plan that fits
        your goals and your budget!
        <span className="text-primary">*</span>
      </p>
      {(isSM || isMD) && !isXL && <StackedDragCarousel />}
      {isXL && <SubscriptionCards />}
      <Button asChild>
        <Link to="/memberships">Explore all options</Link>
      </Button>
      <div className="text-sm text-slate-400">
        *Rates displayed are for registered members of the gym.
      </div>
    </section>
  );
}

export default MembershipPlans;
