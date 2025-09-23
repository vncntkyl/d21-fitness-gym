import SubscriptionCard from "@/components/routes/public/memberships/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PAYMENT_MODES } from "@/data/map";
import { useSubscriptions } from "@/hooks/use-subscriptions";
import { formatNumber } from "@/lib/format";
import { useMemo, useState } from "react";

function Subscriptions() {
  const { data, isLoading } = useSubscriptions();
  const [activeTab, setActiveTab] = useState("1");

  const subscriptionList = useMemo(() => {
    if (!data || isLoading) return [];

    return data.filter((item) => String(item.subscription_type) === activeTab);
  }, [data, isLoading, activeTab]);

  const monthlyPlan = useMemo(() => {
    if (!data || isLoading) return null;

    return data.find(
      (item) =>
        item.duration === 1 &&
        item.payment_mode === 2 &&
        item.subscription_type === 1
    );
  }, [data, isLoading, activeTab]);
  return (
    <section className="py-8 px-6 container mx-auto bg-neutral-100 flex flex-col gap-8 mb-8">
      <div className="w-full">
        <h2 className="text-2xl font-semibold mb-4 uppercase font-audiowide text-center underline underline-offset-8 leading-relaxed decoration-primary">
          Gym Subscription Plans
        </h2>
        <p className="leading-relaxed text-center">
          Choose the plan that fits your lifestyle. All subscriptions come with
          the same full access to our gym and facilities, the only difference is
          how long you want to commit. The longer you stay, the more you save!
        </p>
      </div>
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mx-auto">
          <TabsTrigger value="1" className="uppercase font-bold">For Members</TabsTrigger>
          <TabsTrigger value="2" className="uppercase font-bold">For Non Members</TabsTrigger>
        </TabsList>
        {[1, 2].map((tab) => {
          return (
            <TabsContent
              key={tab}
              value={String(tab)}
              className="flex flex-wrap gap-12 justify-center pt-8"
            >
              {subscriptionList.map((item) => {
                const baseline = monthlyPlan ? Number(monthlyPlan.amount) : 0;

                const savings = !(
                  item.duration === 1 &&
                  item.payment_mode === 2 &&
                  item.subscription_type === 1
                )
                  ? (baseline - Number(item.amount)) / baseline
                  : 0;
                return (
                  <div
                    key={item.ID}
                    className="border p-4 min-w-3xs bg-black flex flex-col gap-4"
                  >
                    <header className="border-b-4 pb-1 border-b-primary">
                      <p className="font-semibold uppercase text-white">
                        {item.name}
                      </p>
                      <span className="text-xs text-gray-300">
                        {item.description}
                      </span>
                    </header>
                    <main className="pt-16 text-white mt-auto">
                      <div className="flex items-end">
                        <p className="text-3xl font-bold">
                          {formatNumber(Number(item.amount))}
                        </p>
                        <span>/{PAYMENT_MODES[item.payment_mode - 1]}</span>
                      </div>
                      {item.subscription_type === 1 &&
                        !(item.duration === 1 && item.payment_mode === 2) && (
                          <span className="text-xs italic">
                            Save up to {savings * 100}% annually!
                          </span>
                        )}
                    </main>
                    <footer className="text-white flex flex-col gap-1 mt-auto">
                      <Button className="bg-primary">Get Started</Button>
                    </footer>
                  </div>
                );
              })}
            </TabsContent>
          );
        })}
      </Tabs>
    </section>
  );
}

export default Subscriptions;
