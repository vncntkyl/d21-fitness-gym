import { Separator } from "@/components/ui/separator";

function Summary() {
  return (
    <section className="py-16 px-6 max-w-5xl mx-auto grid lg:grid-cols-2">
      <h2 className="text-3xl font-semibold mb-8 uppercase lg:text-4xl font-audiowide underline underline-offset-8 leading-relaxed decoration-primary">
        Inside D21
      </h2>
      <div className="flex flex-col gap-4">
        <p className="text-lg leading-relaxed mb-4 text-center">
          Founded by twin brothers <strong>Don</strong> and{" "}
          <strong>Dustin Aguado</strong> at age 21, D21 Fitness Gym combines
          their passion for basketball and fitness into a space designed for
          athletes and individuals committed to a healthier lifestyle.
        </p>

        <Separator />
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-1 gap-8">
          <div>
            <div className="flex items-center justify-between gap-4 relative mb-4">
              <h3 className="bg-white z-1 px-2 text-2xl font-semibold uppercase">
                Our Mission
              </h3>
              <p className="bg-white z-1 pl-2 text-primary/50">01</p>
              <div className="w-full absolute h-0.5 bg-primary/50" />
            </div>
            <p>
              To empower individuals of all fitness levels to lead healthier,
              stronger, and more confident lives through an accessible,
              effective and inspiring environment.
            </p>
          </div>
          <div>
            <div className="flex items-center justify-between gap-4 relative mb-4">
              <p className="bg-white z-1 pr-2 text-primary/50">02</p>
              <h3 className="bg-white z-1 px-2 text-2xl font-semibold uppercase">
                Our Vision
              </h3>
              <div className="w-full absolute h-0.5 bg-primary/50" />
            </div>
            <p>
              To build a fit and motivated community where everyone can grow and
              succeed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Summary;
