import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

const INTERACTIVE_SELECTOR = "button, a, input, .vd-card, .flavor-card";

const CustomCursor = () => {
  const dripRef = useRef(null);
  const trailRef = useRef(null);
  // Only devices with a real mouse get the custom cursor — touch has no pointer to replace.
  const canHover = useMediaQuery({ query: "(hover: hover) and (pointer: fine)" });

  useEffect(() => {
    if (!canHover) return;

    const drip = dripRef.current;
    const trail = trailRef.current;

    // Base tilt so the rounded-pin shape reads as a downward-pointing drip.
    gsap.set([drip, trail], { rotation: -45 });

    const setDripX = gsap.quickTo(drip, "x", { duration: 0.08, ease: "power3" });
    const setDripY = gsap.quickTo(drip, "y", { duration: 0.08, ease: "power3" });
    const setTrailX = gsap.quickTo(trail, "x", { duration: 0.45, ease: "power3" });
    const setTrailY = gsap.quickTo(trail, "y", { duration: 0.45, ease: "power3" });

    const handleMove = (e) => {
      setDripX(e.clientX);
      setDripY(e.clientY);
      setTrailX(e.clientX);
      setTrailY(e.clientY);
    };

    const handleOver = (e) => {
      if (e.target.closest(INTERACTIVE_SELECTOR)) {
        gsap.to(trail, {
          scale: 1.6,
          backgroundColor: "rgba(162, 104, 51, 0.6)",
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };
    const handleOut = (e) => {
      if (e.target.closest(INTERACTIVE_SELECTOR)) {
        gsap.to(trail, {
          scale: 1,
          backgroundColor: "rgba(227, 164, 88, 0.55)",
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };
    // A little squash-and-recover on click, like a drop landing.
    const handleDown = () => gsap.to(drip, { scale: 0.6, duration: 0.15 });
    const handleUp = () => gsap.to(drip, { scale: 1, duration: 0.4, ease: "elastic.out(1, 0.4)" });

    document.body.classList.add("custom-cursor-active");
    window.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseout", handleOut);
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseout", handleOut);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
    };
  }, [canHover]);

  if (!canHover) return null;

  return (
    <>
      <div ref={trailRef} className="cursor-drip-trail" aria-hidden="true" />
      <div ref={dripRef} className="cursor-drip" aria-hidden="true" />
    </>
  );
};

export default CustomCursor;
