import "./Footer.scss";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__icons-div">
                    <a href="https://github.com/Ekpenga9000"  className="footer__icon">
                    <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/omogbareekpenga/" className="footer__icon">
                    <FaLinkedin />
                    </a>
                    <a href="mailto:ekpenga9000@gmail.com" className="footer__icon">
                    <BiLogoGmail />
                    </a>
                </div>
                <p className="footer__copyright">&copy; 2023 Omogbare Louis Ekpenga. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer; 