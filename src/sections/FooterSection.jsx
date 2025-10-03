import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useMediaQuery } from "react-responsive";

const FooterSection = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

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
      <img
        src="/images/footer-dip.png"
        alt=""
        className="w-full object-cover -translate-y-1"
      />
      <div
        className="flex flex-col justify-between md:px-8 mt-5 w-full h-[95vh] py-15 size-20"
        style={{
          backgroundImage: `url('https://cdn.prod.website-files.com/669a8d6498ba88c08dfd2cd2/66a799f357e5045354c1d4e9_map.svg')`,
        }}
      >
        <div className="relative inline-block md:translate-y-20 ms-15">
          <div className="general-title relative flex flex-col justify-center items-center gap-5 -mt-8 ">
            <div className="overflow-hidden place-self-start">
              <h1 className="xl:max-w-2xl md:py-0 py-3 md:pb-5 pb-0 lg:pb-0 md:text-center text-[#FAEADE] footer-title ">
                Right Around
              </h1>
            </div>
            <div
              style={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
              className="rotate-[4deg] border-[#E9AA56] text-nowrap opacity-0 place-self-start corner-tit -mx-1 -mt-8 mb-8"
            >
              <div className="bg-[#E9AA56] pb-2 md:pt-0 pt-2 px-3 inline-block  ">
                <h2 className="text-[#523122]">The Corner</h2>
              </div>
            </div>
          </div>
          <div className="flex lg:justify-start lg:mt-0 translate-y-5 ">
            <div className="md:max-w- max-w-md">
              <p className="text-base md:text-left text-balance font-paragraph text-milk">
                Buy our drinks at your local store or <br /> get them delivered
                (to your door).
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* second section */}
      <div className="xl:h-[110dvh] relative md:pt-[20vh] pt-[10vh]">
        <div className="overflow-hidden">
          <h1 className="general-title text-center text-milk py-5 z-10">
            #CHUGRESPONSIBLY
          </h1>
        </div>

        {isMobile ? (
          <img
            src="/images/footer-drink.png"
            className="absolute top-0 object-contain"
          />
        ) : (
          <video
            src="/videos/splash.mp4"
            autoPlay
            playsInline
            muted
            className="absolute -top-10 object-contain mix-blend-lighten"
          />
        )}

        <div className="flex-center gap-5 relative md:mt-20 mt-5">
          <div className="social-btn">
            <img src="./images/yt.svg" alt="" />
          </div>
          <div className="social-btn">
            <img src="./images/insta.svg" alt="" />
          </div>
          <div className="social-btn">
            <img src="./images/tiktok.svg" alt="" />
          </div>
        </div>

        <div className="mt-30 md:px-10 px-5 flex gap-10 md:flex-row flex-col justify-between text-milk font-paragraph md:text-sm font-medium">
          <div className="flex md:gap-12 gap-5 ">
            <div>
              <p>SPYLT Flavors</p>
            </div>
            <div>
              <p>Chug Club</p>
              <p>Student Marketing</p>
              <p>Dairy Dealers</p>
            </div>
            <div>
              <p>Company</p>
              <p>Contacts</p>
              <p>Tasty Talk</p>
            </div>
          </div>

          <div className="md:max-w-lg ">
            <p className="pe-12">
              Get Exclusive Early Access and Stay Informed About Product
              Updates, Events, and More!
            </p>
            <div className="flex justify-between items-center border-b border-[#D9D9D9] pt-5 pb-3 md:mt-10">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full placeholder:font-sans placeholder:text-[#999999]"
              />
              <img src="/images/arrow.svg" alt="arrow" className="size-7" />
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-box">
        {/* The final row with copyright and legal links. */}
        <p>Copyright © 2025 Spylt - All Rights Reserved</p>
        <div className="flex items-center gap-7">
          <p>Privacy Policy</p>
          <p>Terms of Sеrvice</p>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
