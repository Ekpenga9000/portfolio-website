import "./Project.scss";
import { FaGithub,FaHtml5, FaPython, FaSass,FaCss3Alt, FaReact, FaNode, FaGitAlt,FaBootstrap } from "react-icons/fa";
import { SiExpress,SiJquery, SiMysql, SiPostman,SiFlask } from "react-icons/si";

const Project = ({isReverse, text, title, link, frontend, backend, src, alt, repo, set2}) => {
    
    return (
        <section className="project">
            <div className="project__container">
                <div className={`project__intro-div${isReverse ? "--reverse" : ""}`}>
                    <div className="project__intro">
                        <h3 className="project__title">
                            {title}
                            </h3>
                        <p className="project__text">
                            {text}
                        </p>
                        <div className="project__link-div">
                       {link &&
                        <a href={link} target="blank" className="project__link"><FaGithub /> Visit Site</a> }
                        
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
                    {src && <div className="project__img-div">
                        <img src={src} alt={alt} className="project__img" />
                    </div>}
                    {!src && <div className="project__img-div">
                        {/* <img src={dev} alt="Omogbare Louis Ekpenga" className="project__img" /> */}
                    </div>}
                </div>
            </div>
        </section>
    )
}

export default Project;