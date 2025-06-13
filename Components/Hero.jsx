export default function HeroSection() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover object-top z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="Untitled design(1).mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Text Content */}
      <div className="relative z-10 max-w-6xl px-4 w-full">
        <div className="text-center lg:text-left lg:max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            A World Running On Fossil Fuels: A Growing Cost To Our Planet
          </h1>
          <p className="text-md md:text-lg lg:text-xl mb-6">
            The time for change is now. Pollution, climate change, and resource depletion demand cleaner, renewable
            alternatives like biomass pellets. Discover why switching from traditional fuels to sustainable solutions is
            critical for industries and communities.
          </p>
        </div>
      </div>
    </section>
  );
}
