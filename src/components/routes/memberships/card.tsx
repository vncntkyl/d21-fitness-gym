import { Button } from "@/components/ui/button";

type Subscription = {
  duration: number;
  price: number;
  description: string;
};

function SubscriptionCard({ duration, price, description }: Subscription) {
  const pricePerMonth = price / duration;

  return (
    <div
      className={`w-full max-w-sm h-64 flex flex-col gap-4 justify-between font-lexend text-white bg-black [clip-path:polygon(0_0,calc(100%_-_1rem)_0,100%_1rem,100%_100%,1rem_100%,0_calc(100%_-_1rem))] p-4 border border-primary`}
    >
      <header className="font-audiowide text-2xl">
        <p>
          {duration} Month{duration > 1 ? "s" : ""}
        </p>
        <p className="text-sm font-lexend text-white/60">{description}</p>
      </header>
      <main className="flex items-end gap-1.5 mt-auto">
        <p className="text-2xl">
          {Intl.NumberFormat("en-PH", {
            style: "currency",
            currency: "PHP",
          }).format(pricePerMonth)}
        </p>
        <span className="text-white/70">per month</span>
      </main>
      <footer>
        <Button className="[clip-path:polygon(0_0,calc(100%_-_8px)_0,100%_8px,100%_100%,8px_100%,0_calc(100%_-_8px))] w-full">
          Get Started
        </Button>
      </footer>
    </div>
  );
}

export default SubscriptionCard;
