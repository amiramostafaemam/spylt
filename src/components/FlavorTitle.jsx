import { useGSAP } from "@gsap/react";
import gsap, { SplitText } from "gsap/all";

const FlavorTitle = () => {
  useGSAP(() => {
    const firstTextSplit = SplitText.create(".first-text-split h1", {
      type: "chars",
    });
    const secondTextSplit = SplitText.create(".second-text-split h2", {
      type: "chars",
    });
    gsap.from(firstTextSplit.chars, {
      yPercent: 200,
      stagger: 0.02,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top 30%",
      },
    });

    gsap.to(".flavor-text-scroll", {
      duration: 1,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top 10%",
      },
    });
    gsap.from(secondTextSplit.chars, {
      yPercent: 200,
      stagger: 0.02,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top 1%",
      },
    });
  });
  return (
    <div className="general-title col-center h-full xl:gap-30 lg:gap-32 md:gap-27 sm:gap-25 gap-20 ">
      <div className=" xl:py-0 lg:py-0 md:py-7 py-4 first-text-split">
        <h1 className="xl:text-[8rem] lg:text-[6.8rem] md:text-[6.5rem] sm:text-[6rem] text-[4.5rem] font-bold uppercase xl:leading-[8vw] lg:leading-[8vw] md:leading-[6vw] leading-[6vw] tracking-[-.35vw]">
          We have 6
        </h1>
      </div>
      <div
        style={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
        className="flavor-text-scroll xl:mb-0 lg:mb-0 md:mb-8 sm:mb-6 mb-5"
      >
        <div className="bg-mid-brown xl:py-5 xl:px-6 lg:py-7 lg:px-6 md:py-12 md:px-3 sm:py-10 sm:px-3 py-8 px-3 ">
          <h2 className="text-milk xl:text-[7.5rem] lg:text-[6.5rem] md:text-[6.3rem] sm:text-[6rem] text-[4.2rem] font-bold uppercase xl:leading-[8vw] lg:leading-[8vw] md:leading-[6vw] leading-[6vw] tracking-[-.35vw]">
            Freaking
          </h2>
        </div>
      </div>
      <div className=" xl:py-0 lg:py-0 md:py-5 py-4  second-text-split md:mt-2">
        <h2 className="xl:text-[8rem] lg:text-[6.8rem] md:text-[6.5rem] sm:text-[5.8rem] text-[4.5rem] font-bold uppercase xl:leading-[8vw] lg:leading-[8vw] md:leading-[6vw] leading-[6vw] tracking-[-.35vw]">
          delicious flavors
        </h2>
      </div>
    </div>
  );
};

export default FlavorTitle;
