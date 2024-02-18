import "./Footer.scss";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <a href="#home" className="footer__logo">oe.</a>
        <div className="footer__div">
          <a href="#about" className="footer__link">About</a>
          <a href="#skills" className="footer__link">Skills</a>
          <a href="#projects" className="footer__link">Projects</a>
        </div>
        <div className="footer__div">
          <a href="https://github.com/Ekpenga9000" className="footer__icon">
            <i className="uil uil-github-alt"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/omogbareekpenga/"
            className="footer__icon"
          >
            <i className="uil uil-linkedin-alt"></i>
          </a>

          <a href="mailto:ekpenga9000@gmail.com" className="footer__icon">
          <i className="uil uil-envelope"></i>
          </a>
        </div>
        <p className="footer__copyright">
          Omogbare Louis Ekpenga &copy; 2023. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
