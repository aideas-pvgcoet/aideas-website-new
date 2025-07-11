import React from "react";

const Hero: React.FC=()=>{
return(
<div className="relative w-full h-[90vh] overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/videos/intro.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay content */}
     
    </div>
);
}

export default Hero;