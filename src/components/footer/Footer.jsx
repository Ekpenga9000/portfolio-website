import "./Footer.scss";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import Animation from "../animation/Animation";

const Footer = () => {
   
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__icons-div">

                    <Animation>
                        <a href="https://github.com/Ekpenga9000" className="footer__icon">
                            <FaGithub />
                        </a>
                    </Animation>
                    <Animation>
                        <a href="https://www.linkedin.com/in/omogbareekpenga/" className="footer__icon">
                            <FaLinkedin />
                        </a>
                    </Animation>
                    <Animation>
                        <a href="mailto:ekpenga9000@gmail.com" className="footer__icon">
                            <BiLogoGmail />
                        </a>
                    </Animation>
                </div>
                <p className="footer__copyright">Omogbare Louis Ekpenga &copy; 2023. All rights reserved.</p>
            </div>
        </footer>
    )
}



export default Footer; 