import StackedDragCarousel from "@/components/routes/memberships/cards";
import { Button } from "@/components/ui/button";

function MembershipPlans() {
  return (
    <section className="min-h-[100vh] flex flex-col gap-4 p-8">
      <header className="text-center font-lexend font-bold text-3xl uppercase">
        Become a member
      </header>
      <p className="text-sm text-center">
        Choose your grind — from full access to student-friendly rates, we've
        got a membership plan that fits your goals and your budget!
      </p>
      <StackedDragCarousel />
      <div className="w-full flex flex-col gap-8 items-center">
        <div className="relative w-full max-w-[300px] min-h-[200px] flex flex-col gap-4 justify-between font-lexend text-white bg-black [clip-path:polygon(0_0,calc(100%_-_1rem)_0,100%_1rem,100%_100%,1rem_100%,0_calc(100%_-_1rem))] p-4">
          <header className="font-audiowide text-xl">
            <p>1 Month</p>
            <p className="text-sm font-lexend text-white/60">No commitments.</p>
          </header>
          <main className="flex items-end gap-1.5 mt-auto">
            <p className="text-2xl">
              {Intl.NumberFormat("en-PH", {
                style: "currency",
                currency: "PHP",
              }).format(2000)}
            </p>
            <span className="text-white/70">per month</span>
          </main>
          <footer>
            <Button className="[clip-path:polygon(0_0,calc(100%_-_8px)_0,100%_8px,100%_100%,8px_100%,0_calc(100%_-_8px))] w-full">
              Get Started
            </Button>
          </footer>
        </div>
        <div className="relative w-full max-w-[300px] min-h-[200px] flex flex-col gap-4 justify-between font-lexend text-white bg-black [clip-path:polygon(0_0,calc(100%_-_1rem)_0,100%_1rem,100%_100%,1rem_100%,0_calc(100%_-_1rem))] p-4">
          <header className="font-audiowide text-xl">
            <p>3 Months</p>
            <p className="text-sm font-lexend text-white/60">Save 10%</p>
          </header>
          <main className="flex items-end gap-1.5 mt-auto">
            <p className="text-2xl">
              {Intl.NumberFormat("en-PH", {
                style: "currency",
                currency: "PHP",
              }).format(1800)}
            </p>
            <span className="text-white/70">per month</span>
          </main>
          <footer>
            <Button className="[clip-path:polygon(0_0,calc(100%_-_8px)_0,100%_8px,100%_100%,8px_100%,0_calc(100%_-_8px))] w-full">
              Get Started
            </Button>
          </footer>
        </div>
        <div className="relative w-full max-w-[300px] min-h-[200px] flex flex-col gap-4 justify-between font-lexend text-white bg-black [clip-path:polygon(0_0,calc(100%_-_1rem)_0,100%_1rem,100%_100%,1rem_100%,0_calc(100%_-_1rem))] p-4">
          <header className="font-audiowide text-xl">
            <p>12 Months</p>
            <p className="text-sm font-lexend text-white/60">Save 30%</p>
          </header>
          <main className="flex items-end gap-1.5 mt-auto">
            <p className="text-2xl">
              {Intl.NumberFormat("en-PH", {
                style: "currency",
                currency: "PHP",
              }).format(1400)}
            </p>
            <span className="text-white/70">per month</span>
          </main>
          <footer>
            <Button className="[clip-path:polygon(0_0,calc(100%_-_8px)_0,100%_8px,100%_100%,8px_100%,0_calc(100%_-_8px))] w-full">
              Get Started
            </Button>
          </footer>
        </div>
      </div>
    </section>
  );
}

export default MembershipPlans;
