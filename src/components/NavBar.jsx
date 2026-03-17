import { useState, useEffect } from "react";
import { useLanguage } from "../i18n/LanguageContext";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, changeLanguage, t } = useLanguage();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  const applyTheme = (themeName) => {
    const html = document.documentElement;
    if (themeName === "light") {
      html.classList.add("light");
    } else {
      html.classList.remove("light");
    }
    localStorage.setItem("theme", themeName);
  };

  const handleThemeToggle = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    applyTheme(newTheme);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: t.nav.links.work, link: "#work" },
    { name: t.nav.links.experience, link: "#experience" },
    { name: t.nav.links.skills, link: "#skills" },
    { name: t.nav.links.certifications, link: "#certifications" },
  ];

  const headerStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    transition: "all 0.35s ease",
    backdropFilter: scrolled ? "blur(24px)" : "blur(6px)",
    WebkitBackdropFilter: scrolled ? "blur(24px)" : "blur(6px)",
    backgroundColor: scrolled ? "rgba(5, 5, 10, 0.88)" : "rgba(0, 0, 0, 0.2)",
    borderBottom: scrolled
      ? "1px solid rgba(255,255,255,0.07)"
      : "1px solid transparent",
    boxShadow: scrolled ? "0 8px 40px rgba(0,0,0,0.5)" : "none",
  };

  const accentLineStyle = {
    height: "2px",
    background:
      "linear-gradient(90deg, transparent 0%, #62e0ff 20%, #52aeff 45%, #fd5c79 70%, #6d45ce 90%, transparent 100%)",
    opacity: scrolled ? 1 : 0.5,
    transition: "opacity 0.35s ease",
  };

  const innerStyle = {
    maxWidth: "1440px",
    margin: "0 auto",
    padding: "0 24px",
    height: "70px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "16px",
  };

  return (
    <>
      <header style={headerStyle}>
        <div style={accentLineStyle} />

        <div style={innerStyle}>

          {/* ── LOGO ── */}
          <a
            href="#hero"
            style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}
          >
            <div style={{
              width: "38px",
              height: "38px",
              borderRadius: "10px",
              background: "linear-gradient(135deg, #62e0ff 0%, #52aeff 50%, #fd5c79 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "800",
              fontSize: "17px",
              color: "white",
              flexShrink: 0,
              boxShadow: "0 0 18px rgba(82,174,255,0.45)",
            }}>
              H
            </div>
            <span style={{
              color: "white",
              fontSize: "17px",
              fontWeight: "700",
              letterSpacing: "-0.2px",
              whiteSpace: "nowrap",
            }}>
              {t.nav.logo}
            </span>
          </a>

          {/* ── DESKTOP NAV ── */}
          <nav className="navbar-desktop">
            <ul style={{ display: "flex", gap: "2px", listStyle: "none", margin: 0, padding: 0 }}>
              {navItems.map(({ link, name }) => (
                <li key={name}>
                  <a
                    href={link}
                    className="nav-link-item"
                    style={{
                      display: "block",
                      padding: "8px 16px",
                      borderRadius: "8px",
                      color: "rgba(217,236,255,0.8)",
                      textDecoration: "none",
                      fontSize: "15px",
                      fontWeight: "500",
                      transition: "all 0.2s ease",
                    }}
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* ── RIGHT ACTIONS ── */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px", flexShrink: 0 }}>

            {/* Language */}
            <div style={{
              display: "flex",
              gap: "2px",
              backgroundColor: "rgba(255,255,255,0.06)",
              borderRadius: "10px",
              padding: "4px",
              border: "1px solid rgba(255,255,255,0.1)",
            }}>
              {["en", "vi"].map((lang) => (
                <button
                  key={lang}
                  onClick={() => changeLanguage(lang)}
                  style={{
                    padding: "5px 12px",
                    borderRadius: "7px",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "12px",
                    fontWeight: "700",
                    letterSpacing: "0.5px",
                    transition: "all 0.2s ease",
                    backgroundColor: language === lang ? "white" : "transparent",
                    color: language === lang ? "#000" : "rgba(217,236,255,0.6)",
                    boxShadow: language === lang ? "0 2px 8px rgba(0,0,0,0.35)" : "none",
                  }}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Theme toggle */}
            <button
              onClick={handleThemeToggle}
              className="icon-btn"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "10px",
                border: "1px solid rgba(255,255,255,0.1)",
                backgroundColor: "rgba(255,255,255,0.06)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                flexShrink: 0,
                transition: "background-color 0.2s ease",
              }}
            >
              {theme === "dark" ? (
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm0 15a4 4 0 100-8 4 4 0 000 8zm8-4a1 1 0 110 2h-1a1 1 0 110-2h1zM4 11a1 1 0 110 2H3a1 1 0 110-2h1zm15.364-6.364a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM6.343 16.95a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zm11.314 0a1 1 0 011.414 0l.707.707a1 1 0 11-1.414 1.414l-.707-.707a1 1 0 010-1.414zM5.636 5.636a1 1 0 011.414 0l.707.707A1 1 0 116.343 7.757l-.707-.707a1 1 0 010-1.414zM12 19a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1z" />
                </svg>
              ) : (
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>

            {/* Contact btn - desktop */}
            <a
              href="#contact"
              className="navbar-contact-btn"
              style={{
                padding: "9px 22px",
                borderRadius: "10px",
                background: "linear-gradient(135deg, #62e0ff 0%, #52aeff 60%, #7b6bff 100%)",
                color: "#000",
                fontWeight: "700",
                fontSize: "14px",
                textDecoration: "none",
                whiteSpace: "nowrap",
                transition: "all 0.25s ease",
                boxShadow: "0 0 22px rgba(82,174,255,0.4)",
              }}
            >
              {t.nav.contact}
            </a>

            {/* Hamburger - mobile */}
            <button
              className="hamburger-btn"
              onClick={() => setMobileMenuOpen((p) => !p)}
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "10px",
                border: "1px solid rgba(255,255,255,0.1)",
                backgroundColor: "rgba(255,255,255,0.06)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                flexShrink: 0,
              }}
            >
              {mobileMenuOpen ? (
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* ── MOBILE MENU ── */}
        {mobileMenuOpen && (
          <div style={{
            borderTop: "1px solid rgba(255,255,255,0.07)",
            backgroundColor: "rgba(5,5,15,0.95)",
            backdropFilter: "blur(24px)",
            padding: "16px 20px 24px",
          }}>
            {/* Lang in mobile (hidden on sm+) */}
            <div
              className="mobile-lang"
              style={{
                display: "flex",
                gap: "4px",
                backgroundColor: "rgba(255,255,255,0.06)",
                borderRadius: "10px",
                padding: "4px",
                width: "fit-content",
                marginBottom: "14px",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              {["en", "vi"].map((lang) => (
                <button
                  key={lang}
                  onClick={() => changeLanguage(lang)}
                  style={{
                    padding: "6px 14px",
                    borderRadius: "7px",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "12px",
                    fontWeight: "700",
                    transition: "all 0.2s ease",
                    backgroundColor: language === lang ? "white" : "transparent",
                    color: language === lang ? "#000" : "rgba(217,236,255,0.6)",
                  }}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>

            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "2px" }}>
              {navItems.map(({ link, name }) => (
                <li key={name}>
                  <a
                    href={link}
                    onClick={() => setMobileMenuOpen(false)}
                    style={{
                      display: "block",
                      padding: "13px 16px",
                      borderRadius: "10px",
                      color: "rgba(217,236,255,0.85)",
                      textDecoration: "none",
                      fontSize: "16px",
                      fontWeight: "500",
                      transition: "all 0.2s ease",
                    }}
                    className="mobile-nav-link"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                display: "block",
                marginTop: "14px",
                padding: "14px",
                borderRadius: "10px",
                background: "linear-gradient(135deg, #62e0ff 0%, #52aeff 60%, #7b6bff 100%)",
                color: "#000",
                fontWeight: "700",
                fontSize: "15px",
                textDecoration: "none",
                textAlign: "center",
              }}
            >
              {t.nav.contact}
            </a>
          </div>
        )}
      </header>

      <style>{`
        .navbar-desktop { display: none; }
        .navbar-contact-btn { display: none !important; }
        .hamburger-btn { display: flex !important; }
        .mobile-lang { display: flex; }

        @media (min-width: 640px) {
          .mobile-lang { display: none !important; }
        }

        @media (min-width: 1024px) {
          .navbar-desktop { display: flex; }
          .navbar-contact-btn { display: flex !important; align-items: center; }
          .hamburger-btn { display: none !important; }
        }

        .nav-link-item:hover {
          color: white !important;
          background-color: rgba(255,255,255,0.08) !important;
        }

        .icon-btn:hover {
          background-color: rgba(255,255,255,0.12) !important;
        }

        .navbar-contact-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 28px rgba(82,174,255,0.6) !important;
        }

        .mobile-nav-link:hover {
          background-color: rgba(255,255,255,0.07) !important;
          color: white !important;
        }

        html.light header {
          background-color: ${scrolled ? "rgba(255,255,255,0.92)" : "rgba(255,255,255,0.75)"} !important;
          border-bottom: 1px solid rgba(0,0,0,0.07) !important;
          box-shadow: ${scrolled ? "0 4px 30px rgba(0,0,0,0.08)" : "none"} !important;
        }
        html.light .nav-link-item { color: rgba(30,30,40,0.75) !important; }
        html.light .nav-link-item:hover { color: #111 !important; background-color: rgba(0,0,0,0.05) !important; }
        html.light header span { color: #1a1a1a !important; }
        html.light .icon-btn { border-color: rgba(0,0,0,0.1) !important; background-color: rgba(0,0,0,0.04) !important; color: #1a1a1a !important; }
        html.light .icon-btn svg { color: #1a1a1a; }
      `}</style>
    </>
  );
};

export default NavBar;