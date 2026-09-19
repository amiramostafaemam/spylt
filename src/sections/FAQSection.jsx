import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { faqList } from "../constants";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".faq-item", {
        opacity: 0,
        y: 30,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="bg-milk py-16 px-5 sm:px-8 md:px-16 xl:px-32"
    >
      <h2 className="general-title text-dark-brown text-center xl:text-6xl md:text-5xl text-4xl xl:leading-[6vw] leading-[9vw] mb-10 md:mb-14">
        Freaking Questions
      </h2>

      <div className="max-w-3xl mx-auto flex flex-col gap-3">
        {faqList.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={item.question}
              data-open={isOpen}
              className="faq-item border border-dark-brown/15 rounded-2xl overflow-hidden bg-white/40"
            >
              <button
                type="button"
                id={`faq-question-${index}`}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${index}`}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                className="w-full flex items-center justify-between gap-4 text-left px-5 py-4 font-paragraph font-semibold text-dark-brown cursor-pointer"
              >
                <span>{item.question}</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className={`size-5 flex-none transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              <div
                id={`faq-panel-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
                className="faq-answer"
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-4 font-paragraph text-sm text-dark-brown/80">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQSection;
