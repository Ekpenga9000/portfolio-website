import "./Footer.scss";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import FooterAnimation from "../footerAnimation/FooterAnimation";

const Footer = () => {
   
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__icons-div">

                    <FooterAnimation>
                        <a href="https://github.com/Ekpenga9000" className="footer__icon">
                            <FaGithub />
                        </a>
                    </FooterAnimation>
                    <FooterAnimation>
                        <a href="https://www.linkedin.com/in/omogbareekpenga/" className="footer__icon">
                            <FaLinkedin />
                        </a>
                    </FooterAnimation>
                    <FooterAnimation>
                        <a href="mailto:ekpenga9000@gmail.com" className="footer__icon">
                            <BiLogoGmail />
                        </a>
                    </FooterAnimation>
                </div>
                <p className="footer__copyright">Omogbare Louis Ekpenga &copy; 2023. All rights reserved.</p>
            </div>
        </footer>
    )
}



export default Footer; 