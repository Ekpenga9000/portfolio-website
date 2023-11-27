import "./About.scss";
import dev from "../../assets/images/Louis.jpg";
import { FaLinkedin, FaGithub, FaSass, FaReact, FaNode, FaGitAlt } from "react-icons/fa";
import { SiExpress, SiMysql, SiPostgresql, SiPostman } from "react-icons/si";

const About = () => {
    return (
        <section className="about">
            <div className="about__container">
                <div className="about__intro">
                    <h3 className="about__title">🌟 Who am I?</h3>
                    <p className="about__text">
                        I&#39;m that developer who believes that semicolons are just commas with a sense of drama. With a cup of coffee in one hand and a keyboard in the other, I embark on a journey through the digital wilderness, crafting elegant solutions and sprinkling a bit of magic in every line of code.
                        I thrive on building seamless web experiences. Sass, React, Node.js, Express, MySQL – you name it, I&#39;ve conjured with it!
                    </p>
                    <div className="about__link-div">
                        <a href="https://www.linkedin.com/in/omogbareekpenga/" target="blank" className="about__link"><FaLinkedin /></a>
                        <a href="https://github.com/Ekpenga9000" target="blank" className="about__link"><FaGithub /></a>
                    </div>
                    <div className="about__icons-div">
                    <FaSass />
                    <FaReact />
                    <FaNode />
                    <SiExpress />
                    <SiMysql />
                    <SiPostgresql />
                    <FaGitAlt />
                    <SiPostman />

                    </div>
                </div>
                <div className="about__img-div">
                    <img src={dev} alt="Omogbare Louis Ekpenga" className="about__img" />
                </div>
            </div>
        </section>
    )
}

export default About; 