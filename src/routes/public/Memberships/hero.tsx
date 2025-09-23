function Hero() {
  return (
    <section
      id="hero"
      className="relative h-[50vh] flex items-center justify-center text-center text-white"
    >
      <img
        src="/memberships.jpg"
        alt="D21 Gym"
        className="absolute inset-0 w-full h-full object-cover brightness-[60%]"
      />
      <div className="relative px-4">
        <p className="text-6xl uppercase font-bold italic pb-1 underline underline-offset-8 leading-relaxed decoration-primary">
          Memberships
        </p>
      </div>
    </section>
  );
}

export default Hero;
