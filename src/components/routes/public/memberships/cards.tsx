import SubscriptionCard from "./card";
import type { Subscription } from "@/types/Subscriptions";

function SubscriptionCards({
  subscriptions,
}: {
  subscriptions: Subscription[];
}) {
  return (
    <div className="w-full flex gap-8 items-center justify-center">
      {subscriptions
        .filter((option) => option.duration !== 6)
        .map((option) => (
          <SubscriptionCard key={option.duration} {...option} />
        ))}
    </div>
  );
}

export default SubscriptionCards;
