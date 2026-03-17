import { useState } from "react";

const BASE_URL = import.meta.env.BASE_URL;

const HeroExperience = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
      }}
    >
      <div
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
        style={{
          position: "relative",
          cursor: "pointer",
          perspective: "1000px",
          transformStyle: "preserve-3d",
          /* Kích thước controlled — không vượt quá container */
          width: "min(320px, 80%)",
          height: "min(320px, 80%)",
          aspectRatio: "1",
          borderRadius: "50%",
          border: "3px solid #99FFCC",
          boxShadow:
            "0 0 32px rgba(153,255,204,0.2), 0 0 64px rgba(82,174,255,0.12)",
          flexShrink: 0,
        }}
      >
        {/* FRONT */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            overflow: "hidden",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transition: "opacity 0.5s ease, transform 0.5s ease",
            opacity: isFlipped ? 0 : 1,
            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
            zIndex: isFlipped ? 0 : 1,
          }}
        >
          <img
            src={BASE_URL + "/images/anh1.jpg"}
            alt="Huong Mai"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        {/* BACK */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            overflow: "hidden",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transition: "opacity 0.5s ease, transform 0.5s ease",
            opacity: isFlipped ? 1 : 0,
            transform: isFlipped ? "rotateY(0deg)" : "rotateY(-180deg)",
            zIndex: isFlipped ? 1 : 0,
          }}
        >
          <img
            src={BASE_URL + "/images/anh2.jpg"}
            alt="Huong Mai alt"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroExperience;