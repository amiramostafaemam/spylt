import { useRef, useState } from "react";
import { cards } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

const TestimonialSection = () => {
  const vdRef = useRef([]);
  const [playingIndex, setPlayingIndex] = useState(null);
  // Devices that can't hover (touch) get tap-to-toggle instead of hover-to-play.
  const canHover = useMediaQuery({ query: "(hover: hover)" });

  // The section is deliberately pulled up to overlap the end of BenefitSection.
  // Both sections' heights scale differently per breakpoint, so a single fixed
  // "-140vh" (tuned for xl) overlaps far more than the whole section on mobile.
  const isXl = useMediaQuery({ query: "(min-width: 1280px)" });
  const isLg = useMediaQuery({ query: "(min-width: 1024px)" });
  const isMd = useMediaQuery({ query: "(min-width: 768px)" });
  const isSm = useMediaQuery({ query: "(min-width: 640px)" });
  const pullUpVh = isXl ? 140 : isLg ? 113 : isMd ? 101 : isSm ? 93 : 86;
  // Below sm the cards are stacked on top of one another (see index.css), so
  // the scattered-photo tilt has to come from GSAP instead of the rotate-z-*
  // classes those rely on — GSAP clears a plain CSS rotate on any element it
  // also drives yPercent on, so setting it through GSAP is what keeps it.
  const isMobileStack = !isSm;

  useGSAP(() => {
    gsap.set(".testimonials-section", {
      marginTop: `-${pullUpVh}vh`,
    });

    if (isMobileStack) {
      gsap.utils.toArray(".vd-card").forEach((el, i) => {
        gsap.set(el, { rotation: cards[i].tiltDeg });
      });
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".testimonials-section",
        start: "top bottom",
        end: "200% top",
        scrub: true,
      },
    });

    tl.to(".testimonials-section .first-title", {
      xPercent: 70,
    })
      .to(
        ".testimonials-section .sec-title",
        {
          xPercent: 25,
        },
        "<"
      )
      .to(
        ".testimonials-section .third-title",
        {
          xPercent: -40,
        },
        "<"
      );

    const pinTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".testimonials-section",
        start: "top top",
        end: "200% top",
        scrub: 1.5,
        pin: true,
      },
    });

    pinTl.from(".vd-card", {
      yPercent: 150,
      stagger: 0.2,
      ease: "power1.inOut",
    });
  }, [pullUpVh, isMobileStack]);

  const handlePlay = (index) => {
    vdRef.current[index]?.play();
    setPlayingIndex(index);
  };

  const handlePause = (index) => {
    vdRef.current[index]?.pause();
    setPlayingIndex((current) => (current === index ? null : current));
  };

  // Touch devices have no hover, so tap toggles play/pause instead.
  // Hover-capable devices already get play/pause from onMouseEnter/onMouseLeave,
  // so a click there must not re-toggle what hover just started.
  const handleCardTap = (index) => {
    if (canHover) return;

    if (playingIndex === index) {
      handlePause(index);
    } else {
      if (playingIndex !== null) handlePause(playingIndex);
      handlePlay(index);
    }
  };

  return (
    <section className="testimonials-section">
      <div className="absolute size-full flex flex-col items-center pt-[6vw]">
        <h1 className="text-black first-title">What's</h1>
        <h1 className="text-light-brown sec-title">Everyone</h1>
        <h1 className="text-black third-title">Talking</h1>
      </div>

      <div className="pin-box">
        {cards.map((card, index) => (
          <div
            key={card.name}
            className={`vd-card relative ${card.translation} ${card.rotation}`}
            onMouseEnter={() => handlePlay(index)}
            onMouseLeave={() => handlePause(index)}
            onClick={() => handleCardTap(index)}
          >
            <video
              ref={(el) => (vdRef.current[index] = el)}
              src={card.src}
              poster={card.img}
              preload="none"
              playsInline
              muted
              loop
              className="size-full object-cover"
            />
            <p className="absolute bottom-3 left-1/2 -translate-x-1/2 text-milk font-paragraph text-sm font-semibold drop-shadow-md">
              {card.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
