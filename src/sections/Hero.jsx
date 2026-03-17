import { useLanguage } from "../i18n/LanguageContext";
import Button from "../components/Button.jsx";
import HeroExperience from "../components/HeroModel/HeroExperience.jsx";
import AnimatedCounter from "../components/AnimatedCounter.jsx";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const BASE_URL = import.meta.env.BASE_URL;

const Hero = () => {
  const { t, language } = useLanguage();

  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10 pointer-events-none">
        <img src={BASE_URL + "/images/bg.png"} alt="background" />
      </div>

      <div className="hero-layout">

        {/* LEFT */}
        <header className="hero-left-col">
          <div className="flex flex-col gap-5 md:gap-6">

            <div className="hero-badge w-fit">
              <p>{t.hero.badge}</p>
            </div>

            <div className="hero-text">
              <h1 style={{ overflow: "hidden", maxWidth: "100%" }}>
                <span style={{ whiteSpace: "nowrap" }}>{t.hero.line1}&nbsp;</span>
                <span className="slide">
                  {/*
                    key={language} — khi đổi ngôn ngữ, React unmount/remount
                    toàn bộ .wrapper, animation CSS restart từ đầu,
                    đảm bảo timing khớp với 8 words mới
                  */}
                  <span className="wrapper" key={language}>
                    {t.hero.words.map((word, index) => (
                      <span
                        key={word.text + index}
                        className="flex items-center pb-2"
                        style={{ gap: "clamp(4px, 0.6vw, 12px)" }}
                      >
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="object-contain rounded-full bg-white-50 flex-shrink-0"
                          style={{
                            width: "clamp(20px, 2.4vw, 34px)",
                            height: "clamp(20px, 2.4vw, 34px)",
                            padding: "clamp(3px, 0.3vw, 6px)",
                          }}
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>{t.hero.line2}</h1>
              <h1>{t.hero.line3}</h1>
            </div>

            <p
              className="text-white-50 relative z-10 pointer-events-none"
              style={{ fontSize: "clamp(13px, 1.1vw, 17px)", maxWidth: "460px", lineHeight: 1.65 }}
            >
              {t.hero.description}
            </p>

            <div style={{ display: "inline-flex", paddingBottom: "4px" }}>
              <Button text={t.hero.cta} id="counter" />
            </div>
          </div>
        </header>

        {/* RIGHT */}
        <figure className="hero-right-col">
          <HeroExperience />
        </figure>

      </div>

      <AnimatedCounter />

      <style>{`
        .hero-left-col {
          width: 100%;
          padding: 0 20px;
          z-index: 10;
          min-width: 0;
          overflow: hidden;
        }
        .hero-right-col {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
          margin: 0;
          flex-shrink: 0;
        }

        @media (min-width: 768px) {
          .hero-left-col { padding: 0 40px; }
        }

        @media (min-width: 1280px) {
          .hero-left-col {
            flex: 0 0 54% !important;
            max-width: 54% !important;
            padding: 0 24px 0 48px !important;
          }
          .hero-right-col {
            flex: 0 0 46% !important;
            max-width: 46% !important;
            min-height: 400px;
          }
          .hero-text {
            font-size: clamp(22px, 2.8vw, 44px) !important;
          }
          .hero-text .slide {
            height: clamp(32px, 4vw, 56px) !important;
            padding-bottom: clamp(14px, 2vw, 26px) !important;
          }
        }

        @media (min-width: 1536px) {
          .hero-text {
            font-size: clamp(30px, 3vw, 54px) !important;
          }
          .hero-text .slide {
            height: clamp(42px, 4.5vw, 68px) !important;
            padding-bottom: clamp(18px, 2.5vw, 32px) !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;