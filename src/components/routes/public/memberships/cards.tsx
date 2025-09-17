import { subscriptions } from "@/data/pricing";
import SubscriptionCard from "./card";

function SubscriptionCards() {
  return (
    <div className="w-full flex gap-8 items-center justify-center">
      {subscriptions.filter(option => option.duration !== 6).map((option) => (
        <SubscriptionCard key={option.duration} {...option} />
      ))}
    </div>
  );
}

export default SubscriptionCards;
