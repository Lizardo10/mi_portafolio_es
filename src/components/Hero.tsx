"use client";
import { useEffect } from "react";
import HeroContent from "./sub/HeroContent";

const Hero = () => {
  const handleResize = () => {
    if (window.innerWidth < 768) {
      window.scrollTo(0, 0);
    }
  };

useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative flex flex-col h-full w-full " id="about-me">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-340px]  h-full w-full left-0 z-[1] object-cover "
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <HeroContent />
    </div>
  );
};

export default Hero;

