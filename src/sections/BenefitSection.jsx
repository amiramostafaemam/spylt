import { useGSAP } from "@gsap/react";
import ClipPathTitle from "../components/ClipPathTitle";
import gsap from "gsap";
import VideoPinSection from "../components/VideoPinSection";

const BenefitSection = () => {
  useGSAP(() => {
    // Animation for first paragraph
    gsap.fromTo(
      ".benefit-section p:first-of-type",
      { opacity: 0.3, y: 30 },
      {
        opacity: 1,
        y: 0,

        ease: "power3.out",
        scrollTrigger: {
          trigger: ".benefit-section p:first-of-type",
          start: "top 90%",
          end: "bottom 20%",
          duration: 1.2,
          scrub: 0.5,
        },
      }
    );
    // Timeline for the titles + "And much more"

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".benefit-section",
        start: "top center+=100",
        end: "bottom center+=100",
        scrub: 1.5,
      },
    });

    tl.fromTo(
      ".benefit-section .first-title",
      {
        clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
        opacity: 0,
      },
      {
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        opacity: 1,
        ease: "circ.out",
        duration: 1,
      }
    )
      .fromTo(
        ".benefit-section .second-title",
        {
          clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
          opacity: 0,
        },
        {
          clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
          opacity: 1,
          ease: "circ.out",
          duration: 0.8,
        },
        "-=0.3"
      )
      .fromTo(
        ".benefit-section .third-title",
        {
          clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
          opacity: 0,
        },
        {
          clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
          opacity: 1,
          ease: "circ.out",
          duration: 0.8,
        },
        "-=0.3"
      )
      .fromTo(
        ".benefit-section .fourth-title",
        {
          clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
          opacity: 0,
        },
        {
          clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
          opacity: 1,
          ease: "circ.out",
          duration: 0.8,
        },
        "-=0.3"
      )
      .fromTo(
        ".benefit-section p:last-of-type",
        {
          y: 80,
          opacity: 0,
          scale: 0.98,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.4,
          ease: "power3.out",
        },
        "-=0.2"
      );
  });

  return (
    <section className="benefit-section">
      <div className="container mx-auto pt-20">
        <div className="col-center">
          <p>
            Unlock the Advantages: <br />
            Explore the Key Benefits of Choosing SPYLT
          </p>

          <div className="mt-15 col-center md:mx-30">
            <ClipPathTitle
              title={"Shelf stable"}
              color={"#faeade"}
              bg={"#c88e64"}
              className={"first-title "}
              borderColor={"#222123"}
            />
            <ClipPathTitle
              title={"Protein + Caffeine"}
              color={"#222123"}
              bg={"#faeade"}
              className={"second-title"}
              borderColor={"#222123"}
            />
            <ClipPathTitle
              title={"Infinitely recyclable"}
              color={"#faeade"}
              bg={"#7F3B2D"}
              className={"third-title"}
              borderColor={"#222123"}
            />
            <ClipPathTitle
              title={"Lactose free"}
              color={"#2E2D2F"}
              bg={"#FED775"}
              className={"fourth-title"}
              borderColor={"#222123"}
            />
          </div>

          <div className="md:mt-0 mt-10">
            <p>And much more ...</p>
          </div>
        </div>
      </div>

      <div className="relative overlay-box">
        <VideoPinSection />
      </div>
    </section>
  );
};

export default BenefitSection;
