import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useLanguage } from "../i18n/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

const AnimatedCounter = () => {
  const { t } = useLanguage();
  const counterRef = useRef(null);
  const countersRef = useRef([]);

  useEffect(() => {
    const counters = countersRef.current;
    if (!counters.length) return;

    counters.forEach((counter, index) => {
      const numberElement = counter?.querySelector(".counter-number");
      const item = t.counter[index];
      if (!numberElement || !item) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: counterRef.current,
          start: "top 80%",
          once: true,
        },
      });

      tl.to(
        { value: 0 },
        {
          value: item.value,
          duration: 2.5,
          ease: "power2.out",
          snap: { value: 1 },
          onUpdate: function () {
            numberElement.textContent = `${Math.round(this.targets()[0].value)}${item.suffix}`;
          },
          onComplete: () => {
            numberElement.textContent = `${item.value}${item.suffix}`;
          },
        }
      );
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, [t]);

  return (
    <div id="counter" ref={counterRef} className="padding-x-lg mt-16 md:mt-20 xl:mt-24 pb-10">
      <div className="mx-auto grid-4-cols">
        {t.counter.map((item, index) => (
          <div
            key={index}
            ref={(el) => el && (countersRef.current[index] = el)}
            className="bg-zinc-900 rounded-lg p-6 md:p-10 flex flex-col justify-center"
          >
            <div className="counter-number text-white-50 text-3xl md:text-4xl xl:text-5xl font-bold mb-2">
              0
            </div>
            <div className="text-white-50 text-sm md:text-base lg:text-lg">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;