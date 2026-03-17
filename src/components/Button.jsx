import { useState } from "react";

const Button = ({ text, id }) => {
  const [hovered, setHovered] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    if (!id) return;
    const target = document.getElementById(id);
    if (!target) return;
    const offset = window.innerHeight * 0.15;
    const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <a
      href="#"
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
        padding: "14px 28px",
        borderRadius: "14px",
        textDecoration: "none",
        cursor: "pointer",
        transition: "all 0.3s ease",
        background: hovered
          ? "linear-gradient(135deg, #7ef0ff 0%, #52aeff 45%, #a78bff 100%)"
          : "linear-gradient(135deg, #62e0ff 0%, #52aeff 50%, #7b6bff 100%)",
        boxShadow: hovered
          ? "0 6px 32px rgba(82,174,255,0.65), 0 0 0 1px rgba(255,255,255,0.15)"
          : "0 2px 20px rgba(82,174,255,0.38), 0 0 0 1px rgba(255,255,255,0.08)",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
      }}
    >
      <span
        style={{
          color: "#000",
          fontWeight: "700",
          fontSize: "15px",
          letterSpacing: "0.3px",
          whiteSpace: "nowrap",
        }}
      >
        {text}
      </span>

      {/* Arrow icon */}
      <span
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "26px",
          height: "26px",
          borderRadius: "50%",
          backgroundColor: "rgba(0,0,0,0.15)",
          transition: "transform 0.3s ease",
          transform: hovered ? "translateY(3px)" : "translateY(0)",
          flexShrink: 0,
        }}
      >
        <svg
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#000"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </span>
    </a>
  );
};

export default Button;