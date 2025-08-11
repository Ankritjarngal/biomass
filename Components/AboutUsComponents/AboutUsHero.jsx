const AboutUsHero = () => {
  return (
    <div className="relative h-[40vh] md:h-[450vh] lg:h-[60vh] overflow-hidden">
      <img
        src="https://i.postimg.cc/gJhc2M9k/b75d7b02eaf8cb6c0def83b293b1e2fb10eb6e73.png"
        alt="Nature background"
        className="absolute inset-0 w-full h-full object-cover object-[center_90%]
r"
      />
      <div className="absolute inset-0 bg-black/40 z-10" />
      <div className="absolute bottom-6 left-4 md:left-10 lg:left-16 text-white z-20">
        <h2 className="text-3xl sm:text-4xl md:text-[52px] font-extrabold">About Us</h2>
      </div>
    </div>
  );
};

export default AboutUsHero;
