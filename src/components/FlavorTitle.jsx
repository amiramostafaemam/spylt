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
    <div className="general-title col-center h-full xl:gap-28 gap-16  ">
      <div className="overflow-hidden xl:py-0 py-3 first-text-split">
        <h1>We have 6</h1>
      </div>
      <div
        style={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
        className="flavor-text-scroll"
      >
        <div className="bg-mid-brown py-2 px-5 pb-3">
          <h2 className="text-milk">Freaking</h2>
        </div>
      </div>
      <div className="overflow-hidden xl:py-0 py-3 second-text-split">
        <h2>delicious flavors</h2>
      </div>
    </div>
  );
};

export default FlavorTitle;
