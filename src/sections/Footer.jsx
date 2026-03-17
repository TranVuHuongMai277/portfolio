import { socialImgs } from "../constants";
import { useLanguage } from "../i18n/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>+84 768.975.604</p>
          <p>phuchai5904@gmail.com</p>
        </div>

        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <a
              key={index}
              href={socialImg.url}
              target="_blank"
              rel="noopener noreferrer"
              className="icon hover:opacity-80 transition-opacity"
            >
              <img src={socialImg.imgPath} alt={socialImg.name} />
            </a>
          ))}
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            {new Date().getFullYear()} Tran Vu Huong Mai. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;