const Hero = () => {
  return (
    <div
      className="w-full h-[90vh] bg-cover bg-center relative"
      style={{ backgroundImage: `url('/image copy.png')` }} // 👈 Put your image here
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Text content */}
      
    </div>
  );
};

export default Hero;
