import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import Lottie from "react-lottie";
import animationData from "../lotties/landingPageAnimation.json";
import { personalDetails } from "../Details";

function Home() {
  const { name, tagline } = personalDetails; // Removed img from destructuring
  const h11 = useRef();
  const h12 = useRef();
  const h13 = useRef();
  const lottieRef = useRef(); // Added ref for Lottie animation
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(
      h11.current,
      {
        x: "-100%",
        delay: 0.8,
        opacity: 0,
        duration: 2,
        ease: "Power3.easeOut",
      },
      "<"
    )
      .from(
        h12.current,
        {
          x: "-100%",
          delay: 0.5,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        h13.current,
        {
          x: "-100%",
          delay: 0.1,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        lottieRef.current, // Added animation for Lottie
        {
          x: "100%",
          delay: 0.5,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      );
  }, []);

  return (
    <main className="container mx-auto max-width section md:flex justify-between items-center">
      <div>
        <h1
          ref={h11}
          className="text-2xl text-dark-heading dark:text-light-heading md:text-2xl xl:text-2xl xl:leading-tight font-bold"
        >
          Hi,👋 <br></br>I'm{" "}
          <span
            ref={h12}
            className="bg-clip-text bg-gradient text-transparent md:text-4xl xl:text-2xl xl:leading-tight font-bold"
          >
            {name}.
          </span>
        </h1>
        <h2
          ref={h13}
          className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-2xl xl:leading-tight font-bold"
        >
          {tagline}
        </h2>
      </div>
      <div className="mt-5 md:mt-0">
        <div ref={lottieRef}>
          {" "}
          {/* Added ref for Lottie container */}
          <Lottie options={defaultOptions} height={500} width={500} />
        </div>
      </div>
    </main>
  );
}

export default Home;
