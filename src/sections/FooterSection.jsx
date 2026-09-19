import { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollSmoother, SplitText } from "gsap/all";
import { useMediaQuery } from "react-responsive";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const FooterSection = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null); // "success" | "error" | null

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!EMAIL_PATTERN.test(email)) {
      setStatus("error");
      return;
    }
    // No backend is wired up yet — this confirms the intent locally.
    setStatus("success");
    setEmail("");
  };

  const scrollToFlavors = (e) => {
    e.preventDefault();
    const target = document.querySelector(".flavor-section");
    if (!target) return;

    const smoother = ScrollSmoother.get();
    if (smoother) {
      smoother.scrollTo(target, true, "top top");
    } else {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  useGSAP(() => {
    const titleSplit = SplitText.create(".footer-title", { type: "chars" });
    const paragraphSplit = SplitText.create(".footer-section p", {
      type: "words , lines",
      linesClass: "paragraph-line",
    });
    const contentTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".footer-section",
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
        trigger: ".footer-section",
        start: "top 80%",
      },
    });
    titleTl.to(".corner-tit", {
      opacity: 1,
      duration: 1,
      ease: "power1.inOut",
      clipPath: "polygon(100% 0, 0 0, 0 100%, 100% 100%)",
    });
  });

  return (
    <section className="footer-section">
      <picture>
        <source srcSet="/images/footer-dip.webp" type="image/webp" />
        <img
          src="/images/footer-dip.png"
          alt=""
          loading="lazy"
          className="w-full object-cover -translate-y-1"
        />
      </picture>
      <div
        className="flex flex-col justify-center mb-10 mt-5 sm:mt-5 md:mt-7 xl:mt-5 w-full xl:min-h-[65vh] lg:min-h-[65vh] md:min-h-[65vh] sm:min-h-[65vh] min-h-[55vh] xl:py-15 "
        style={{
          backgroundImage: `url('https://cdn.prod.website-files.com/669a8d6498ba88c08dfd2cd2/66a799f357e5045354c1d4e9_map.svg')`,
        }}
      >
        <div className="relative inline-block sm:ms-10 mt-8 ms-8 sm:mt-12 md:mt-5 md:ms-10 lg:ms-10 xl:ms-15">
          <div className="general-title relative flex flex-col justify-center items-center md:gap-5 lg:gap-5 xl:-mt-8 lg:-mt-7 ">
            <div className=" place-self-start text-[4rem] sm:text-[4.8rem] md:text-[5.8rem] lg:text-[6.5rem]">
              <h1 className=" md:py-0 py-3 md:pb-5 pb-0 lg:pb-0 md:text-center text-[#FAEADE] footer-title ">
                Right Around
              </h1>
            </div>
            <div
              style={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
              className="rotate-[4deg] border-[#E9AA56] text-nowrap opacity-0 place-self-start corner-tit -mx-1 mt-2 sm:mt-2 md:-mt-10 lg:-mt-5 xl:-mt-7 mb-5 sm:mb-10 md:mb-5 lg:mb-8 text-[4rem] sm:text-[4.8rem] md:text-[5.8rem] lg:text-[6.7rem]"
            >
              <div className="bg-[#E9AA56] py-5 sm:py-3 md:py-4 pt-2 px-3  inline-block  ">
                <h2 className="text-[#523122]">The Corner</h2>
              </div>
            </div>
          </div>
          <div className="flex lg:justify-start lg:mt-0 translate-y-5 ">
            <div>
              <p className=" md:text-[1rem] lg:text-[1rem] xl:text-[1.2rem] md:text-left text-balance font-paragraph text-milk">
                Buy our drinks at your local store or <br /> get them delivered
                (to your door).
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* second section */}
      <div className=" relative md:pt-[4vh] sm:pt-[2vh]">
        <div className="overflow-hidden">
          <h1 className="general-title text-center text-milk py-5 z-10">
            #CHUGRESPONSIBLY
          </h1>
        </div>

        {isMobile ? (
          <picture>
            <source srcSet="/images/footer-drink.webp" type="image/webp" />
            <img
              src="/images/footer-drink.png"
              alt=""
              loading="lazy"
              className="absolute -left-15 -top-30 object-contain sm:mt-12   h-[150vh] sm:z-1 pointer-events-none"
            />
          </picture>
        ) : (
          <video
            src="/videos/splash.mp4"
            autoPlay
            playsInline
            muted
            preload="metadata"
            className="absolute -top-10  object-contain mix-blend-lighten pointer-events-none"
          />
        )}

        <div className="flex-center gap-5 relative xl:mt-10 lg:mt-8 md:mt-5 sm:mt-8 sm:mb-10 mb-10">
          {/* TODO: swap href="#" for the real profile URLs once available */}
          <a href="#" className="social-btn" aria-label="YouTube">
            <img src="/images/yt.svg" alt="" />
          </a>
          <a href="#" className="social-btn" aria-label="Instagram">
            <img src="/images/insta.svg" alt="" />
          </a>
          <a href="#" className="social-btn" aria-label="TikTok">
            <img src="/images/tiktok.svg" alt="" />
          </a>
        </div>

        <div className=" xl:mt-22 lg:mt-15 md:px-10 px-5 flex md:gap-10 sm:gap-12 gap-12 md:flex-row flex-col md:justify-between sm:items-end items-end text-milk font-paragraph xl:text-[1.2rem] lg:text-[1rem] font-medium">
          <div className="flex md:gap-12 gap-15">
            <div>
              <a href="#flavors" onClick={scrollToFlavors}>
                SPYLT Flavors
              </a>
            </div>
            <div className="flex flex-col gap-1">
              <a href="#">Chug Club</a>
              <a href="#">Student Marketing</a>
              <a href="#">Dairy Dealers</a>
            </div>
            <div className="flex flex-col gap-1">
              <a href="#">Company</a>
              <a href="#">Contacts</a>
              <a href="#">Tasty Talk</a>
            </div>
          </div>

          <div className="md:text-[1rem] md:-mt-10 mt-15">
            <p>
              Get Exclusive Early Access and Stay Informed <br /> About Product
              Updates, Events, and More!
            </p>
            <form
              onSubmit={handleNewsletterSubmit}
              noValidate
              className="flex justify-between items-center border-b border-[#D9D9D9] pt-5 pb-3 sm:mt-5 md:mt-10 sm:mb-5 mt-15"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status) setStatus(null);
                }}
                placeholder="Enter your email"
                aria-label="Email address"
                className="w-full placeholder:font-sans placeholder:text-[#999999] bg-transparent outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe to the newsletter"
                className="cursor-pointer"
              >
                <img src="/images/arrow.svg" alt="" className="size-7" />
              </button>
            </form>
            {status === "success" && (
              <p className="mt-2 text-sm text-green-400">
                Thanks — you're on the list!
              </p>
            )}
            {status === "error" && (
              <p className="mt-2 text-sm text-red-400">
                Please enter a valid email address.
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="copyright-box">
        {/* The final row with copyright and legal links. */}
        <p>Copyright © 2025 Spylt - All Rights Reserved</p>
        <div className="flex items-center gap-7">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
