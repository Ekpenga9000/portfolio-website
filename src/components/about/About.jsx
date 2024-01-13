import "./About.scss";
import dev from "../../assets/images/Louis.jpg";
import { FaLinkedin, FaGithub, FaSass, FaReact, FaNode, FaGitAlt } from "react-icons/fa";
import { SiExpress, SiMysql, SiPostgresql, SiPostman } from "react-icons/si";
import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap"; 
gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const comp = useRef(null);
    const leftSide = useRef(null);
    const rightSide = useRef(null);

    useLayoutEffect(() => { 
        let ctx = gsap.context(() => {
            gsap.from(leftSide.current, {
                duration: 1,
                y: 50,
                opacity: 0,
                scrollTrigger: leftSide.current,
                ease: "power2.out"
            });
            gsap.from(rightSide.current, {
                duration: 2,
                y: 50,
                opacity: 0,
                scrollTrigger: rightSide.current,
                ease: "power2.out"
            });
        }, comp);
        return () => ctx.revert(); 
    }, []);

    return (
        <section className="about" id="about">
            <div className="about__container" ref={comp}>
                <div className="about__intro" ref={rightSide}>
                    <h3 className="about__title">🌟 Who am I?</h3>
                    <p className="about__text">
                        I&#39;m that developer who believes that semicolons are just commas with a sense of drama. With a cup of coffee in one hand and a keyboard in the other, I embark on a journey through the digital wilderness, crafting elegant solutions and sprinkling a bit of magic in every line of code.
                        I thrive on building seamless web experiences. Sass, React, Node.js, Express, MySQL – you name it, I&#39;ve conjured with it!
                    </p>
                    <div className="about__link-div">
                        <a href="https://www.linkedin.com/in/omogbareekpenga/" target="blank" className="about__link--linkedIn"><FaLinkedin /></a>
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
                <div className="about__img-div" ref={leftSide}>
                    <img src={dev} alt="Omogbare Louis Ekpenga" className="about__img" />
                </div>
            </div>
        </section>
    )
}

export default About; 