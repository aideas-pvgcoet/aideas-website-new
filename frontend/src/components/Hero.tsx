import React from "react";

const Hero: React.FC=()=>{
return(
  <div className="relative w-full h-[90vh] overflow-hidden">
      {/* Outer container for cropping */}
     <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
 <iframe
  src="https://www.youtube.com/embed/00FfJa0HwAw?autoplay=1&mute=1&loop=1&playlist=00FfJa0HwAw&controls=0&modestbranding=1&showinfo=0"
  title="aIDEAS Intro Video"
  allow="autoplay; encrypted-media"
  allowFullScreen
  className="absolute w-[150%] h-[150%] scale-125 -translate-x-[20%] -translate-y-[20%]"
/>

</div>


      {/* Content overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white bg-black/40">
        <h1 className="text-4xl md:text-6xl font-bold">Welcome to aIDEAS</h1>
        <p className="mt-4 text-lg md:text-2xl">Empowering Innovation</p>
      </div>
    </div>
);
}

export default Hero;