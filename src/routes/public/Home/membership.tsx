import Header from "@/components/layouts/header";
import SubscriptionCards from "@/components/routes/public/memberships/cards";
import StackedDragCarousel from "@/components/routes/public/memberships/stackedCards";
import { Button } from "@/components/ui/button";
import { useScreenWidth } from "@/context/screenWidthContext";
import { useSubscriptions } from "@/hooks/use-subscriptions";
import { useMemo } from "react";
import { Link } from "react-router-dom";

function MembershipPlans() {
  const { data, isLoading } = useSubscriptions();
  const { isSM, isMD, isLG } = useScreenWidth();
  const subscriptionList = useMemo(() => {
    if (!data || isLoading) return [];

    return data.filter(
      (item) => item.duration !== 6 && item.subscription_type !== 2
    );
  }, [data, isLoading]);
  return (
    <section className="flex flex-col gap-4 p-8 items-center">
      <Header text="Choose your grind" />
      <p className="text-center">
        Whether you're a student or a pro, we've got a membership plan that fits
        your goals and your budget!
        <span className="text-primary">*</span>
      </p>
      {(isSM || isMD) && !isLG && (
        <StackedDragCarousel subscriptions={subscriptionList} />
      )}
      {isLG && <SubscriptionCards subscriptions={subscriptionList} />}
      <div className="text-sm text-slate-400">
        *Rates displayed are for registered members of the gym.
      </div>
      <Button asChild>
        <Link to="/memberships" className="lg:w-fit py-6 px-6">
          Explore all options
        </Link>
      </Button>
    </section>
  );
}

export default MembershipPlans;
