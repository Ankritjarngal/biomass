const AboutUsHero = () => {
  return (
    <div className="relative h-[40vh] md:h-[450vh] lg:h-[60vh] overflow-hidden">
      <img
        src="/badaa488fb990404e0ff130e4f5a605cd176fb74.jpg"
        alt="Nature background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40 z-10" />
      <div className="absolute bottom-6 left-4 md:left-10 lg:left-16 text-white z-20">
        <h2 className="text-3xl sm:text-4xl md:text-[52px] font-extrabold">About Us</h2>
      </div>
    </div>
  );
};

export default AboutUsHero;
