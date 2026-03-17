import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useLanguage } from "../i18n/LanguageContext";
import TitleHeader from "../components/TitleHeader";
import TechIconCardExperience from "../components/models/tech_logos/TechIconCardExperience";

const BASE_URL = import.meta.env.BASE_URL;

const techStackModels = [
  { modelPath: `${BASE_URL}/models/python-transformed.glb`, scale: 0.8, rotation: [0, 0, 0] },
  { modelPath: `${BASE_URL}/models/node-transformed.glb`, scale: 4.6, rotation: [0, -Math.PI / 2, 0] },
  { modelPath: `${BASE_URL}/models/java.glb`, scale: 1.4, rotation: [0, 0, 0] },
  { modelPath: `${BASE_URL}/models/sql.glb`, scale: 5, rotation: [0, -Math.PI / 4, 0] },
  { modelPath: `${BASE_URL}/models/react.glb`, scale: 1, rotation: [0, 0, 0] },
];

const TechStack = () => {
  const { t } = useLanguage();

  useGSAP(() => {
    gsap.fromTo(
      ".tech-card",
      { y: 50, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 1, ease: "power2.inOut", stagger: 0.2,
        scrollTrigger: { trigger: "#skills", start: "top center" },
      }
    );
  });

  const icons = t.techStack.icons.map((item, i) => ({
    ...techStackModels[i],
    name: item.name,
  }));

  return (
    <div id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title={t.techStack.sectionTitle}
          sub={t.techStack.sectionBadge}
        />
        <div className="tech-grid">
          {icons.map((icon) => (
            <div
              key={icon.name}
              className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
            >
              <div className="tech-card-animated-bg" />
              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  <TechIconCardExperience model={icon} />
                </div>
                <div className="padding-x w-full">
                  <p>{icon.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;