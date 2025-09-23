import { coreValues } from "@/data/coreValues";
function CoreValues() {
  return (
    <section className="py-8 px-6 max-w-5xl mx-auto bg-neutral-100 flex flex-col gap-8 mb-8">
      <div className="w-full">
        <h2 className="text-3xl font-semibold mb-8 uppercase lg:text-4xl text-end font-audiowide underline underline-offset-8 leading-relaxed decoration-primary">
          Our Values
        </h2>
        <p className="leading-relaxed text-right">
          A space where passion meets purpose, where beginners and athletes
          train side by side, and where every rep brings you closer to the
          strongest version of you.{" "}
          <span className="font-semibold">
            D21 is more than fitness — it's your next chapter.
          </span>
        </p>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
        {coreValues.map((value, i) => (
          <div
            key={i}
            className="p-4 border last:col-[2/3] transition-all hover:bg-white hover:-translate-y-1 hover:shadow"
          >
            <div className="flex items-center gap-4 relative font-semibold mb-3">
              <p className="text-xs">{`0${i + 1}`}</p>
              <h3 className="z-1 uppercase">{value.title}</h3>
            </div>
            <p className="text-gray-600 text-sm">{value.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CoreValues;
