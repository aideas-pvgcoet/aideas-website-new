const Hero = () => {
  return (
   <div
  className="
    w-full
    h-[70vh] sm:h-[80vh] md:h-[100vh]
    bg-cover
    bg-no-repeat
    bg-[center_top_60%]
    sm:bg-[center_top_40%]
    md:bg-[center_top_30%]
    relative
  "
  style={{ backgroundImage: `url('/image copy.png')` }}
>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Text */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white">
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
