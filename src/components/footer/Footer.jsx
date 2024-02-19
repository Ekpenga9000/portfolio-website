import "./Footer.scss";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <a href="#home" className="footer__logo">
          oe.
        </a>
        <div className="footer__div">
          <a href="#about" className="footer__link">
            About
          </a>
          <a href="#skills" className="footer__link">
            Skills
          </a>
          <a href="#projects" className="footer__link">
            Projects
          </a>
        </div>
        <div className="footer__div">
          <a href="https://github.com/Ekpenga9000" className="footer__icon">
            <i className="bx bxl-github"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/omogbareekpenga/"
            className="footer__icon"
          >
            <i className="bx bxl-linkedin-square"></i>
          </a>

          <a href="mailto:ekpenga9000@gmail.com" className="footer__icon">
            <i className="bx bxl-gmail"></i>
          </a>
        </div>
        <p className="footer__copyright">
        &copy; Omogbare Louis Ekpenga. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
