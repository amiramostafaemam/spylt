import { useGSAP } from "@gsap/react";
import { flavorlists } from "../constants";
import gsap from "gsap";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const FlavorSlider = () => {
  const sliderRef = useRef(null);
  const moveTimeoutRef = useRef(null);

  const isDesktop = useMediaQuery({
    query: "(min-width: 1280px)", // xl breakpoint
  });

  const isLarge = useMediaQuery({
    query: "(min-width: 1024px)", // lg breakpoint
  });

  const isMedium = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1023px)", // md breakpoint
  });

  useGSAP(() => {
    if (!sliderRef.current) return;

    // Responsive scroll behavior: horizontal for lg/xl (1024px+), vertical for md and smaller
    if (isLarge || isDesktop) {
      // Horizontal scroll for lg/xl (1024px+)
      const scrollAmount = sliderRef.current.scrollWidth - window.innerWidth;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".flavor-section",
          start: "2% top",
          end: `+=${scrollAmount + 1500}px`,
          scrub: true,
          pin: true,
        },
      });

      tl.to(".flavor-section", {
        x: `-${scrollAmount + 1500}px`,
        ease: "power1.inOut",
      });

      // Title animations for horizontal scroll (xPercent for lg/xl)
      const titleTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".flavor-section",
          start: "top top",
          end: "bottom 80%",
          scrub: true,
        },
      });

      titleTl
        .to(".first-text-split", {
          xPercent: -30,
          ease: "power1.inOut",
        })
        .to(
          ".flavor-text-scroll",
          {
            xPercent: -22,
            ease: "power1.inOut",
          },
          "<"
        )
        .to(
          ".second-text-split",
          {
            xPercent: -10,
            ease: "power1.inOut",
          },
          "<"
        );
    } else {
      // Vertical scroll for md and smaller (under 1024px)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".flavor-section",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });

      // Vertical title animations (yPercent for md and smaller)
      tl.to(".first-text-split", {
        yPercent: -20,
        ease: "power1.inOut",
      })
        .to(
          ".flavor-text-scroll",
          {
            yPercent: -15,
            ease: "power1.inOut",
          },
          "<"
        )
        .to(
          ".second-text-split",
          {
            yPercent: -10,
            ease: "power1.inOut",
          },
          "<"
        );

      // Cards vertical scroll animation
      tl.to(
        ".flavors",
        {
          y: -200,
          ease: "power1.inOut",
        },
        "-=0.5"
      );
    }
  });

  // Responsive parallax effect handler
  const handleInteractionMove = (clientX, clientY, card) => {
    const rect = card.getBoundingClientRect();

    // Calculate position relative to card center
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (clientX - centerX) / rect.width;
    const deltaY = (clientY - centerY) / rect.height;

    // Responsive maximum movement based on screen size
    const maxMove = isDesktop ? 20 : isLarge ? 15 : isMedium ? 12 : 8;

    const drinksElement = card.querySelector(".drinks");
    const elementsElement = card.querySelector(".elements");

    if (drinksElement && elementsElement) {
      // Drinks moves ONLY horizontally (x-axis only)
      gsap.to(drinksElement, {
        x: -deltaX * maxMove,
        y: 0, // Always 0 for drinks
        duration: 0.3,
        ease: "power2.out",
      });

      // Elements moves in ALL directions (both x and y axes)
      gsap.to(elementsElement, {
        x: deltaX * maxMove,
        y: deltaY * maxMove,
        duration: 0.3,
        ease: "power2.out",
      });

      // Clear existing timeout
      if (moveTimeoutRef.current) {
        clearTimeout(moveTimeoutRef.current);
      }

      // Set timeout to detect when interaction stops
      moveTimeoutRef.current = setTimeout(() => {
        gsap.to([drinksElement, elementsElement], {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
        });
      }, 100);
    }
  };

  const handleMouseMove = (e) => {
    handleInteractionMove(e.clientX, e.clientY, e.currentTarget);
  };

  const handleTouchMove = (e) => {
    if (e.touches.length > 0) {
      e.preventDefault();
      handleInteractionMove(
        e.touches[0].clientX,
        e.touches[0].clientY,
        e.currentTarget
      );
    }
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    const drinksElement = card.querySelector(".drinks");
    const elementsElement = card.querySelector(".elements");

    // Clear timeout
    if (moveTimeoutRef.current) {
      clearTimeout(moveTimeoutRef.current);
    }

    // Return to original position
    if (drinksElement && elementsElement) {
      gsap.to([drinksElement, elementsElement], {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    }
  };

  const handleTouchEnd = (e) => {
    const card = e.currentTarget;
    const drinksElement = card.querySelector(".drinks");
    const elementsElement = card.querySelector(".elements");

    // Clear timeout
    if (moveTimeoutRef.current) {
      clearTimeout(moveTimeoutRef.current);
    }

    // Return to original position
    if (drinksElement && elementsElement) {
      gsap.to([drinksElement, elementsElement], {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    }
  };

  return (
    <div ref={sliderRef} className="slider-wrapper">
      <div className="flavors">
        {flavorlists.map((flavor, index) => (
          <div
            key={flavor.name}
            className={`flavor-card relative z-30 xl:w-[50vw] lg:w-[70vw] md:w-[65vw] w-[80vw] xl:h-[75vh] lg:h-[70vh] md:h-[80vh] h-[55vh] flex-none xl:rounded-3xl lg:rounded-3xl md:rounded-3xl rounded-2xl overflow-visible md:mb-10 sm:mb-35 ${
              flavor.rotation
            } ${
              index === flavorlists.length - 1
                ? "xl:mb-20 lg:mb-16 md:mb-12 sm:mb-10 mb-20"
                : ""
            }`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Background image with z-index: 10 */}
            <img
              src={`/images/${flavor.color}-bg.svg`}
              alt=""
              className="absolute bottom-0 w-full h-60 object-cover xl:rounded-3xl lg:rounded-3xl md:rounded-3xl sm:rounded-2xl rounded:3xl xl:h-full xl:w-175 lg:h-full sm:h-77 md:h-90  "
              style={{ zIndex: 10 }}
            />

            {/* Drinks image with z-index: 30 and slight protrusion */}
            <img
              src={`/images/${flavor.color}-drink.webp`}
              alt=""
              className="drinks  ;"
              style={{
                zIndex: 30,
                transform: "translateY(0%) scale(1.02) ",
              }}
            />

            {/* Elements image with z-index: 35 and slight protrusion */}
            <img
              src={`/images/${flavor.color}-elements.webp`}
              alt=""
              className="elements"
              style={{
                zIndex: 35,
                transform: "translateY(0%)  md:scale(1.02)",
              }}
            />

            {/* Flavor name with highest z-index: 40 */}
            <h1 style={{ zIndex: 40 }}>{flavor.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlavorSlider;
