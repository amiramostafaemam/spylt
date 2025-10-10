import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const MessageSection = () => {
  useGSAP(() => {
    // Create text splits - keep original behavior for full GSAP effects
    const firstMsgSplit = SplitText.create(".first-message", {
      type: "words",
    });
    const secondMsgSplit = SplitText.create(".second-message", {
      type: "words",
    });
    const paragraphSplit = SplitText.create(".message-content p", {
      type: "words,lines",
      linesClass: "paragraph-line",
    });

    // First message animation - original scroll effect
    gsap.to(firstMsgSplit.words, {
      color: "#faeade",
      ease: "power1.in",
      stagger: 1,
      scrollTrigger: {
        trigger: ".message-content",
        start: "top center",
        end: "30% center",
        scrub: true,
      },
    });

    // Second message animation - original scroll effect
    gsap.to(secondMsgSplit.words, {
      color: "#faeade",
      ease: "power1.in",
      stagger: 1,
      scrollTrigger: {
        trigger: ".second-message",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });

    // Message scroll reveal animation - original effect
    const revealTL = gsap.timeline({
      delay: 1,
      scrollTrigger: {
        trigger: ".msg-text-scroll",
        start: "top 60%",
      },
    });
    revealTL.to(".msg-text-scroll", {
      duration: 1,
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      ease: "circ.inOut",
    });

    // Paragraph animation - starts in middle of last h1 scrubbing
    const paragraphTL = gsap.timeline({
      scrollTrigger: {
        trigger: ".second-message",
        start: "center center", // Start when second message is at center
        end: "bottom 20%", // End when second message is at bottom 20%
        scrub: true,
      },
    });
    paragraphTL.from(paragraphSplit.words, {
      yPercent: 200,
      rotate: 0.5,
      ease: "power1.inOut",
      duration: 1.5,
      stagger: 0.005,
    });
  });

  return (
    <section className="message-content">
      <div className="container mx-auto flex-center xl:py-20 lg:py-15 md:py-10 sm:py-20 px-3 py-10 relative">
        <div className="w-full h-full">
          <div className="msg-wrapper">
            <h1 className="first-message">
              Stir up your <br /> fearless past and
            </h1>
            <div
              style={{
                clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
              }}
              className="msg-text-scroll sm:mt-5 md:mt-5 lg:mb-27 xl:mt-25 mb-5 "
            >
              <div className="bg-light-brown sm:py-3 md:py-3 px-2 lg:px-6 xl:py-5 xl:px-6 lg:py-5 py-1">
                <h2 className="text-red-brown sm:text-[4rem] md:text-[4.5rem] lg:text-[6rem] xl:text-[6.7rem] text-[2rem]">
                  Fuel Up
                </h2>
              </div>
            </div>
            <h1 className="second-message">
              your future with every gulp of Perfect Protein
            </h1>
          </div>
          <div className="flex-center xl:mt-15 mt-7 sm:mt-9">
            <div className="max-w-xl px-7 flex-center overflow-hidden">
              <p>
                Rev up your rebel spirit and feed the adventure of life with
                SPYLT, where you’re one chug away from epic nostalgia and
                fearless fun.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessageSection;
