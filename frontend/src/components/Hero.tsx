const Hero = () => {
  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/intro.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Text Content */}
      <div className="relative z-20 flex flex-col justify-center items-center h-full text-center px-4 text-white">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
          Welcome to aIDEAS
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl">
          Empowering Innovation
        </p>
      </div>
    </div>
  );
};

export default Hero;
