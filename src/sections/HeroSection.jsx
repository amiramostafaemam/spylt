import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useMediaQuery } from "react-responsive";

const HeroSection = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  const isBase = useMediaQuery({
    query: "(max-width: 639px)",
  });

  const isTablet = useMediaQuery({
    query: "(max-width: 1024px)",
  });

  useGSAP(() => {
    // Responsive GSAP: ClipPath animation for .hero-text-scroll on ALL devices
    const tl = gsap.timeline({ delay: 1 });
    if (window.innerWidth >= 1024) {
      const titleSplit = SplitText.create(".hero-title", { type: "chars" });

      tl.to(".hero-content", { opacity: 1, y: 0, ease: "power1.inOut" })
        .to(
          ".hero-text-scroll",
          {
            duration: 1,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "circ.out",
          },
          "-=0.5"
        )
        .from(
          titleSplit.chars,
          {
            yPercent: 200,
            stagger: 0.02,
            ease: "power2.out",
          },
          "-=0.5"
        );

      // Desktop-only scroll trigger for rotation/scale effect
      const heroTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero-container",
          start: "1% top",
          end: "bottom top",
          scrub: true,
        },
      });
      heroTl.to(".hero-container", {
        rotate: 7,
        scale: 0.9,
        yPercent: 40,
        ease: "power1.inOut",
      });
    } else if (window.innerWidth >= 768) {
      tl.to(".hero-content", {
        opacity: 1,
        y: 0,
        ease: "power1.inOut",
        duration: 0.8,
      })
        .to(
          ".hero-text-scroll",
          {
            duration: 0.8,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "circ.out",
          },
          "-=0.3"
        )
        .from(
          ".hero-title",
          {
            y: 50,
            opacity: 0,
            ease: "power2.out",
            duration: 0.6,
          },
          "-=0.6"
        );
    } else {
      // Mobile/Base: Basic clipPath animation only (lightweight)
      tl.to(".hero-content", {
        opacity: 1,
        y: -10,
        ease: "power1.inOut",
        duration: 0.6,
      }).to(
        ".hero-text-scroll",
        {
          duration: 0.6,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "power2.out",
        },
        "-=0.2"
      );
    }
  });

  return (
    <section className="bg-main-bg">
      <div className="hero-container">
        {/* Responsive background: Video for desktop, hero-bg for tablet, hero-img for mobile */}
        {!isTablet ? (
          // LG: Video background
          <video
            src="/videos/hero-bg.mp4"
            autoPlay
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : isMobile ? (
          // SM: Hero-img as background
          <img
            src="/images/hero-bg.png"
            className="absolute inset-0 w-full h-full object-contain"
            alt="Hero background"
          />
        ) : (
          // MD: Hero-bg as background
          <img
            src="/images/hero-bg.png"
            className="absolute inset-0 w-full h-full object-cover"
            alt="Hero background"
          />
        )}
        <div className="hero-content opacity-0 relative">
          <div className="overflow-visible">
            <h1 className="hero-title">Freaking Delicious</h1>
          </div>
          <div
            style={{
              clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
            }}
            className="hero-text-scroll"
          >
            <div className="hero-subtitle">
              <h1>Protein + Caffeine </h1>
            </div>
          </div>

          <h2>
            Live life to the fullest with SPYLT: Shatter boredom and
            <br /> embrace your inner kid with every deliciously smooth chug.
          </h2>
          <div className="hero-button">
            <p>Chug a SPYLT</p>
            <div className="drip-3"></div>
            <div className="drip-4"></div>
            <div className="drip-5"></div>
            <div className="drip-6"></div>
            <div className="drip-7"></div>
            <div className="drip-8"></div>
            <div className="drip-9"></div>
            <div className="drip-10"></div>
            <div className="drip-11"></div>
            <div className="drip-12"></div>
            <div className="drip-13"></div>
          </div>
          {/*adding a photo in mode : base mode  */}
          {isBase && (
            <img
              src="/images/hero-img.png"
              className="mt-15 h-24 w-1/2 object-contain rounded-sm absolute bottom-7"
              alt="Hero additional image"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
