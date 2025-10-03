// import { useGSAP } from "@gsap/react";
// import { flavorlists } from "../constants";
// import gsap from "gsap";
// import { useRef } from "react";
// import { useMediaQuery } from "react-responsive";

// const FlavorSlider = () => {
//   const sliderRef = useRef();

//   const isTablet = useMediaQuery({
//     query: "(max-width: 1024px)",
//   });

//   useGSAP(() => {
//     const scrollAmount = sliderRef.current.scrollWidth - window.innerWidth;

//     if (!isTablet) {
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: ".flavor-section",
//           start: "2% top",
//           end: `+=${scrollAmount + 1500}px`,
//           scrub: true,
//           pin: true,
//         },
//       });

//       tl.to(".flavor-section", {
//         x: `-${scrollAmount + 1500}px`,
//         ease: "power1.inOut",
//       });
//     }

//     const titleTl = gsap.timeline({
//       scrollTrigger: {
//         trigger: ".flavor-section",
//         start: "top top",
//         end: "bottom 80%",
//         scrub: true,
//       },
//     });

//     titleTl
//       .to(".first-text-split", {
//         xPercent: -30,
//         ease: "power1.inOut",
//       })
//       .to(
//         ".flavor-text-scroll",
//         {
//           xPercent: -22,
//           ease: "power1.inOut",
//         },
//         "<"
//       )
//       .to(
//         ".second-text-split",
//         {
//           xPercent: -10,
//           ease: "power1.inOut",
//         },
//         "<"
//       );
//   });

//   return (
//     <div ref={sliderRef} className="slider-wrapper">
//       <div className="flavors">
//         {flavorlists.map((flavor) => (
//           <div
//             key={flavor.name}
//             className={`relative z-30 lg:w-[50vw] w-96 lg:h-[75vh] md:w-[90vw] md:h-[50vh] h-80 flex-none ${flavor.rotation}`}
//           >
//             <img
//               src={`/images/${flavor.color}-bg.svg`}
//               alt=""
//               className="absolute bottom-0 "
//             />

//             <img
//               src={`/images/${flavor.color}-drink.webp`}
//               alt=""
//               className="drinks"
//             />

//             <img
//               src={`/images/${flavor.color}-elements.webp`}
//               alt=""
//               className="elements"
//             />

//             <h1>{flavor.name}</h1>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FlavorSlider;
import { useGSAP } from "@gsap/react";
import { flavorlists } from "../constants";
import gsap from "gsap";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const FlavorSlider = () => {
  const sliderRef = useRef(null);
  const moveTimeoutRef = useRef(null);

  const isTablet = useMediaQuery({
    query: "(max-width: 1024px)",
  });

  useGSAP(() => {
    if (!sliderRef.current) return;
    const scrollAmount = sliderRef.current.scrollWidth - window.innerWidth;

    if (!isTablet) {
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
    }

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
  });

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    // Calculate mouse position relative to card center
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) / rect.width;
    const deltaY = (e.clientY - centerY) / rect.height;

    // Maximum movement in pixels
    const maxMove = 15;

    const drinksElement = card.querySelector(".drinks");
    const elementsElement = card.querySelector(".elements");

    // Drinks moves opposite (parallax effect)
    gsap.to(drinksElement, {
      x: -deltaX * maxMove,
      y: -deltaY * maxMove,
      duration: 0.3,
      ease: "power2.out",
    });

    // Elements moves with mouse
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

    // Set timeout to detect when mouse stops moving
    moveTimeoutRef.current = setTimeout(() => {
      gsap.to([drinksElement, elementsElement], {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    }, 100);
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
    gsap.to([drinksElement, elementsElement], {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  return (
    <div ref={sliderRef} className="slider-wrapper">
      <div className="flavors">
        {flavorlists.map((flavor) => (
          <div
            key={flavor.name}
            className={`relative z-30 lg:w-[50vw] w-96 lg:h-[75vh] md:w-[90vw] md:h-[50vh] h-80 flex-none ${flavor.rotation}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={`/images/${flavor.color}-bg.svg`}
              alt=""
              className="absolute bottom-0 "
            />

            <img
              src={`/images/${flavor.color}-drink.webp`}
              alt=""
              className="drinks"
            />

            <img
              src={`/images/${flavor.color}-elements.webp`}
              alt=""
              className="elements"
            />

            <h1>{flavor.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlavorSlider;
