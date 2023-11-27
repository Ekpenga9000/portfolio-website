import "./Project.scss";
// import dev from "../../assets/images/Louis.jpg";
import { FaGithub, FaSass, FaReact, FaNode, FaGitAlt } from "react-icons/fa";
import { SiExpress, SiMysql, SiPostman } from "react-icons/si";

const Project = ({isReverse, text, title, link, frontend, backend}) => {
    
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
                        
                            <a href={frontend} target="blank" className="project__link"><FaGithub /> View Frontend Repo</a>
                            <a href={backend} target="blank" className="project__link"><FaGithub /> View Backend Repo</a>
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