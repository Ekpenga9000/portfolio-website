import "./Project.scss";
import { FaGithub,FaHtml5, FaPython, FaSass,FaCss3Alt, FaReact, FaNode, FaGitAlt,FaBootstrap, FaExternalLinkAlt } from "react-icons/fa";
import { SiExpress, SiJquery, SiMysql, SiPostman, SiFlask } from "react-icons/si";
import { useRef, useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);


const Project = ({isReverse, text, title, link, frontend, backend, src, alt, repo, set2, video, poster}) => {
    const leftSide = useRef(null); 
    const rightSide = useRef(null);
    const comp = useRef(null); 

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(leftSide.current, {
                duration: 1.5,
                x: -300,
                opacity: 0,
                scrollTrigger: leftSide.current,
                ease:"power2.out"
            });
            gsap.from(rightSide.current, {
                duration: 2,
                x: -300,
                opacity:0,
                scrollTrigger: rightSide.current,
                ease:"power2.out"
            });
        }, comp); 
        return () => ctx.revert(); 
    }, []); 
    return (
        <section className="project">
            <div className="project__container" ref={comp}>
                <div className={`project__intro-div${isReverse ? "--reverse" : ""}`} ref={isReverse ? rightSide : leftSide}>
                    <div className="project__intro">
                        <h3 className="project__title">
                            {title}
                            </h3>
                        <p className="project__text">
                            {text}
                        </p>
                        <div className="project__link-div">
                       {link &&
                        <a href={link} target="blank" className="project__link"><FaExternalLinkAlt /> Visit Site</a> }
                        
                           { frontend && <a href={frontend} target="blank" className="project__link"><FaGithub /> View Frontend Repo</a>}
                            {backend && <a href={backend} target="blank" className="project__link"><FaGithub /> View Backend Repo</a>}
                            {repo && <a href={repo} target="blank" className="project__link"><FaGithub /> View Repo</a>}
                        </div>
                        {!set2 && <div className="project__icons-div">
                            <FaSass />
                            <FaReact />
                            <FaNode />
                            <SiExpress />
                            <SiMysql />
                            <FaGitAlt />
                            <SiPostman />
                        </div>}
                        {set2 && <div className="project__icons-div">
                            <FaHtml5 />
                            <FaCss3Alt />
                            <FaBootstrap />
                            <SiJquery />
                            <FaPython />
                            <SiFlask />
                            <SiMysql />
                            <FaGitAlt />
                        </div>}
                    </div>
                    {!video && <div className="project__img-div" ref={isReverse ? leftSide : rightSide}>
                        <img src={src} alt={alt} className="project__img" />
                    </div>}
                    {video && <div className="project__img-div" ref={isReverse ? leftSide : rightSide}>
                        <video poster={poster} controls="controls" className="project__img">
                            <source src={video} type="video/mp4"/>
                        </video>
                    </div>}
                </div>
            </div>
        </section>
    )
}

export default Project;