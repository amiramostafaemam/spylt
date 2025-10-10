import { useEffect, useState } from "react";
import { nutrientLists } from "../constants";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

const NutritionSection = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
  // const isSmall= useMediaQuery({ query: "(max-width: 1023px)" });

  const [lists, setLists] = useState(nutrientLists);
  useEffect(() => {
    if (isMobile) {
      setLists(nutrientLists.slice(0, 3));
    } else {
      setLists(nutrientLists);
    }
  }, [isMobile]);

  useGSAP(() => {
    const titleSplit = SplitText.create(".nutrition-title", { type: "chars" });
    const paragraphSplit = SplitText.create(".nutrition-section p", {
      type: "words , lines",
      linesClass: "paragraph-line",
    });
    const contentTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".nutrition-section",
        start: "top center",
      },
    });
    contentTl
      .from(titleSplit.chars, {
        yPercent: 100,
        stagger: 0.02,
        ease: "power2.out",
      })
      .from(paragraphSplit.words, {
        yPercent: 300,
        rotate: 3,
        ease: "power1.inOut",
        duration: 1,
        stagger: 0.01,
      });

    const titleTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".nutrition-section",
        start: "top 80%",
      },
    });
    titleTl.to(".nutrition-text-scroll", {
      opacity: 1,
      duration: 1,
      ease: "power1.inOut",
      clipPath: "polygon(100% 0, 0 0, 0 100%, 100% 100%)",
    });
  });

  return (
    <section className="nutrition-section">
      <img
        src="/images/slider-dip.png"
        alt=""
        className="w-full object-cover "
      />
      <img src="/images/big-img.png" alt="" className="big-img z-15 " />
      <div className="flex md:flex-row lg:flex-row flex-col justify-between lg:py-6 lg:px-5 md:px-5 md:py-4 sm:px-8 sm:py-0 sm:mb-2  md:mt-1 mt-5 ms-3">
        <div className="relative inline-block md:translate-y-8 lg:translate-y-5 xl:translate-y-12 z-20">
          <div className="general-title relative flex flex-col justify-center items-center xl:gap-22 lg:gap-25 md:gap-15 sm:gap-22 xl:-mt-8">
            <div className=" place-self-start">
              <h1 className="nutrition-title">It still does</h1>
            </div>
            <div
              style={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
              className="nutrition-text-scroll place-self-start "
            >
              <div className="bg-yellow-brown lg:pb-2 lg:px-3 md:pt-0 md:py-0 sm:py-3 md:px-3 px-3 py-4 inline-block ">
                <h2 className="text-milk-yellow">Body Good</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex sm:mt-7 sm:ms-10 md:justify-end lg:justify-end lg:mt-0 md:absolute md:top-1/3 md:right-5 text-[0rem] sm:text-[0.7rem] md:text-[0.7rem] lg:text-[0.7rem] xl:text-[0.8rem] md:-translate-y-20 lg:translate-y-0 xl:translate-y-8 z-30">
        <div>
          <p className="font-paragraph text-balance !text-right ">
            Milk contains a wide array of <br />
            nutrients, including vitamins, minerals,
            <br /> and protein, and this is lactose free
          </p>
        </div>
      </div>

      <div className="nutrition-box z-30">
        <div className="list-wrapper">
          {lists.map((nutrient, index) => (
            <div key={index} className="relative flex-1  col-center">
              <div>
                <p className="xl:text-[0.9rem] lg:text-[0.7rem] md:text-[0.6rem] sm:text-[0.8rem] text-[0.8rem] lg:pt-1 font-paragraph ">
                  {nutrient.label}
                </p>
                <p className="font-paragraph xl:text-[0.8rem] lg:text-[0.5rem] md:text-[0.5rem] sm:text-[0.5rem] text-[0.4rem] mt-1">
                  up to
                </p>
                <p className="xl:text-[1.5rem] lg:text-[1.2rem] md:text-[0.8rem] sm:text-[1rem] tracking-tighter font-bold">
                  {nutrient.amount}
                </p>
              </div>
              {index !== lists.length - 1 && <div className="spacer-border" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NutritionSection;
