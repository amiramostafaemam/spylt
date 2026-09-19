import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollSmoother, SplitText } from "gsap/all";
import { useMediaQuery } from "react-responsive";

const HeroSection = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  const isTablet = useMediaQuery({
    query: "(max-width: 1024px)",
  });

  useGSAP(() => {
    // Responsive GSAP: ClipPath animation for .hero-text-scroll on ALL devices
    const tl = gsap.timeline({ delay: 1 });
    if (!isTablet) {
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
            opacity: 0,
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
    } else if (!isMobile) {
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
  }, [isTablet, isMobile]);

  const handleCTAClick = () => {
    const target = document.querySelector(".flavor-section");
    if (!target) return;

    const smoother = ScrollSmoother.get();
    if (smoother) {
      smoother.scrollTo(target, true, "top top");
    } else {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Magnetic pull: the button drifts toward the cursor, then snaps back on leave.
  const handleCTAMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    gsap.to(e.currentTarget, { x: x * 0.3, y: y * 0.3, duration: 0.3, ease: "power2.out" });
  };
  const handleCTAMouseLeave = (e) => {
    gsap.to(e.currentTarget, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.3)" });
  };

  return (
    <section className="bg-main-bg">
      <div className="hero-container">
        {/* Same full-bleed video background on every breakpoint — it's a small,
            fast-loading clip, and it's what actually carries the "floating cans"
            look, so cropping it down to a static image on small screens only
            left mobile feeling sparse. */}
        <video
          src="/videos/hero-bg.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
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
          <button
            type="button"
            onClick={handleCTAClick}
            onMouseMove={handleCTAMouseMove}
            onMouseLeave={handleCTAMouseLeave}
            className="hero-button"
            aria-label="Chug a SPYLT — jump to the flavors"
          >
            <span>Chug a SPYLT</span>
            <span className="drip-3"></span>
            <span className="drip-4"></span>
            <span className="drip-5"></span>
            <span className="drip-6"></span>
            <span className="drip-7"></span>
            <span className="drip-8"></span>
            <span className="drip-9"></span>
            <span className="drip-10"></span>
            <span className="drip-11"></span>
            <span className="drip-12"></span>
            <span className="drip-13"></span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
