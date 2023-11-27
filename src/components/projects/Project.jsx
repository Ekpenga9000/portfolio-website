import "./Project.scss";
// import dev from "../../assets/images/Louis.jpg";
import { FaLinkedin, FaGithub, FaSass, FaReact, FaNode, FaGitAlt } from "react-icons/fa";
import { SiExpress, SiMysql, SiPostman } from "react-icons/si";

const Project = () => {
    return (
        <section className="project">
            <div className="project__container">
                <h2 className="project__title">My Projects</h2>
                <div className="project__intro-div">
                    <div className="project__intro">
                        <h3 className="project__title">Qlique-Qlick: Revolutionizing Social Media for the Authentic You!</h3>
                        <p className="project__text">
                            Embark on a refreshing social journey with my capstone creation, Qlique-Qlick! Tired of algorithmic chaos and mindless scrolling? Qlique-Qlick is your digital sanctuary, offering a customer-centric, distraction-free haven. This minimalist social media app is tailored for genuine connections, stripping away the noise to let your unique voice shine. Navigate effortlessly through a seamless, intuitive interface, and reclaim the joy of sharing with those who matter most. Join the Qlique-Qlick movement — because your social experience should reflect you, not an algorithm. 🚀✨
                        </p>
                        <div className="project__link-div">
                            <a href="https://www.linkedin.com/in/omogbareekpenga/" target="blank" className="project__link--linkedIn"><FaLinkedin /></a>
                            <a href="https://github.com/Ekpenga9000" target="blank" className="project__link"><FaGithub /></a>
                        </div>
                        <div className="project__icons-div">
                            <FaSass />
                            <FaReact />
                            <FaNode />
                            <SiExpress />
                            <SiMysql />
                            <FaGitAlt />
                            <SiPostman />
                        </div>
                    </div>
                    <div className="project__img-div">
                        {/* <img src={dev} alt="Omogbare Louis Ekpenga" className="project__img" /> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Project;