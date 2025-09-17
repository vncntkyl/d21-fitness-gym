import Header from "@/components/layouts/header";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function Registration() {
  return (
    <section className="min-h-screen bg-[url('@/assets/pattern-1.jpg')] bg-no-repeat bg-cover bg-center text-white w-full lg:flex flex-row lg:min-h-[50vh]">
      <div className="bg-black/40 w-full">
        <div className="container mx-auto flex flex-col gap-4 p-8 h-full lg:flex-row lg:gap-8">
          <div className="flex flex-col gap-2 w-full items-center lg:pt-4">
            <Header text="Time to get stronger" />
            <div className="flex flex-col gap-2 w-full pt-4 md:px-10 lg:gap-4">
              <h1 className="text-2xl font-lexend uppercase font-semibold tracking-tighter">
                Start your journey with us
              </h1>
              <div className="font-lexend tracking-tight md:pl-4 lg:tracking-normal">
                <ul className="pl-4 space-y-2">
                  <li className="list-disc">
                    200+ equipment to power every fitness goal
                  </li>
                  <li className="list-disc">
                    Personalized training programs and full-body assessments
                  </li>
                  <li className="list-disc">
                    Certified fitness coaches ready to guide you every step
                  </li>
                  <li className="list-disc">
                    A supportive community that feels like family
                  </li>
                  <li className="list-disc">
                    Annual membership for only ₱1,000 — no hidden fees
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <form className="min-h-[calc(50vh-1rem)] bg-white/85 backdrop-blur text-black p-8 flex flex-col gap-6 md:w-[70vw] md:mt-4 mx-auto">
            <h1 className="font-lexend uppercase text-xl font-semibold text-primary w-full text-center pb-2">
              Be a member!
            </h1>
            <Input
              placeholder="First Name"
              className="border-black border-2 py-5"
            />
            <Input
              placeholder="Last Name"
              className="border-black border-2 py-5"
            />
            <Input
              placeholder="Email Address"
              className="border-black border-2 py-5"
            />
            <Input
              placeholder="Phone Number"
              className="border-black border-2 py-5"
            />
            <div className="flex items-center gap-2">
              <Checkbox
                id="termsAndCondition"
                className="border-primary border-2"
              />
              <Label htmlFor="termsAndCondition">
                I agree to the Terms and Condition Policy.
              </Label>
            </div>
            <Button className="py-8">Submit</Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Registration;
