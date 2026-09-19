import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const MIN_VISIBLE_MS = 500;
const MAX_WAIT_MS = 2500;

const Preloader = () => {
  const [visible, setVisible] = useState(true);
  const overlayRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    let cancelled = false;

    gsap.to(logoRef.current, {
      opacity: 0.4,
      duration: 0.7,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    const minDelay = new Promise((resolve) => setTimeout(resolve, MIN_VISIBLE_MS));
    const fontsReady =
      typeof document !== "undefined" && document.fonts
        ? document.fonts.ready
        : Promise.resolve();
    const hardTimeout = new Promise((resolve) => setTimeout(resolve, MAX_WAIT_MS));

    Promise.race([Promise.all([minDelay, fontsReady]), hardTimeout]).then(() => {
      if (cancelled || !overlayRef.current) return;
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: "power1.out",
        onComplete: () => setVisible(false),
      });
    });

    return () => {
      cancelled = true;
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      ref={overlayRef}
      aria-hidden="true"
      className="fixed inset-0 z-[999] flex-center bg-milk"
    >
      <img
        ref={logoRef}
        src="/images/nav-logo.svg"
        alt=""
        className="w-20 sm:w-24"
      />
    </div>
  );
};

export default Preloader;
