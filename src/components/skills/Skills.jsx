import { useState, useCallback } from "react";
import "./Skills.scss";
import {
  SiGreensock,
  SiJest,
  SiReactquery,
  SiExpress,
  SiMysql,
  SiNextdotjs,
  SiNginx,
  SiJirasoftware,
} from "react-icons/si";
import { DiScrum } from "react-icons/di";
import {
  MdMiscellaneousServices,
  MdChecklistRtl,
  MdOutlineViewKanban,
} from "react-icons/md";
import { VscServerProcess } from "react-icons/vsc";
import { TbBrandOauth } from "react-icons/tb";
import { FaGitAlt, FaFigma } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { BsLayoutTextWindowReverse } from "react-icons/bs";

const Skills = () => {
    const [activeTab, setActiveTab] = useState("frontend"); 

    const toggleSkills = useCallback((param) => {
        setActiveTab(param);
    }, []);

  return (
    <section className="skills" id="skills">
      <div className="skills__container container">
        <h2 className="skills__title">Skills</h2>
        <span className="skills__sub-title">A life long Learner</span>
          <ul>
            <li
              className={`skills__stack${activeTab === "frontend" ? "--active" : ""}`}
              onClick={() => toggleSkills("frontend")}
            >
              <i className="bx bx-code-alt"></i> Frontend
            </li>
            <li
              className={`skills__stack${activeTab === "backend" ? "--active" : ""}`}
              onClick={() => toggleSkills("backend")}
            >
              <i className="bx bx-server"></i> Backend
            </li>
            <li
              className={`skills__stack${activeTab === "support" ? "--active" : ""}`}
              onClick={() => toggleSkills("support")}
            >
              <MdMiscellaneousServices /> Support Skills
            </li>
          </ul>
        <div className="skills__cards-div">
          {activeTab === "frontend" && (
            <ul className="skills__card">
              <li className="skills__item">
                {" "}
                <i className="bx bx-code-alt"></i> HTML
              </li>
              <li className="skills__item">
                {" "}
                <i className="bx bxl-css3"></i> CSS
              </li>
              <li className="skills__item">
                <i className="bx bxl-sass"></i> SASS
              </li>
              <li className="skills__item">
                <i className="bx bxl-bootstrap"></i> Bootstrap
              </li>
              <li className="skills__item">
                <i className="bx bxl-tailwind-css"></i> Tailwind CSS
              </li>
              <li className="skills__item">
                <SiGreensock /> GSAP
              </li>
              <li className="skills__item">
                <i className="bx bxl-javascript"></i> JavaScript
              </li>
              <li className="skills__item">
                <i className="bx bxl-typescript"></i> TypeScript
              </li>
              <li className="skills__item">
                <i className="bx bxl-redux"></i> Redux Toolkit
              </li>
              <li className="skills__item">
                <SiReactquery /> React Query
              </li>
              <li className="skills__item">
                <i className="bx bxl-react"></i> React.js
              </li>
              <li className="skills__item">
                <SiJest /> Jest
              </li>
            </ul>
          )}

          {activeTab === "backend" && (
            <ul className="skills__card">
              <li className="skills__item">
                {" "}
                <i className="bx bxl-nodejs"></i> Node.js
              </li>
              <li className="skills__item">
                {" "}
                <SiExpress /> Express.js
              </li>
              <li className="skills__item">
                <TbBrandOauth /> OAuth2
              </li>
              <li className="skills__item">
                <SiMysql /> MySQL
              </li>
              <li className="skills__item">
                <i className="bx bxl-postgresql"></i> PostgreSQL
              </li>
              <li className="skills__item">
                <i className="bx bxl-mongodb"></i> MongoDB
              </li>
              <li className="skills__item">
                <SiNextdotjs />
                Next.js
              </li>
              <li className="skills__item">
                <i className="bx bxl-docker"></i> Docker
              </li>
              <li className="skills__item">
                <i className="bx bxl-kubernetes"></i>Kubernetes
              </li>
              <li className="skills__item">
                <i className="bx bxl-google-cloud"></i> Google Cloud
                Platform(GCP)
              </li>
              <li className="skills__item">
                <SiNginx /> Ingress-nginx
              </li>
              <li className="skills__item">
                <i className="bx bxl-python"></i> Python
              </li>
            </ul>
          )}

          {activeTab === "support" && (
            <ul className="skills__card">
              <li className="skills__item">
                <i className="bx bx-code-curly"></i> REST API
              </li>
              <li className="skills__item">
                {" "}
                <i className="bx bx-data"></i> Database design
              </li>
              <li className="skills__item">
                <VscServerProcess /> Microservices Architecture
              </li>
              <li className="skills__item">
                <FaGitAlt /> Git
              </li>
              <li className="skills__item">
                <FaGithub /> Github
              </li>
              <li className="skills__item">
                <BsLayoutTextWindowReverse /> Wireframing
              </li>
              <li className="skills__item">
                <i className="bx bx-message-dots"></i> Effective communication
              </li>
              <li className="skills__item">
                <MdChecklistRtl />
                Requirements gathering
              </li>
              <li className="skills__item">
                <FaFigma />
                Figma
              </li>
              <li className="skills__item">
                <DiScrum />
                Agile/Scrum methodology
              </li>
              <li className="skills__item">
                <MdOutlineViewKanban />
                Agile/Kanban methodology
              </li>
              <li className="skills__item">
                <SiJirasoftware />
                Jira Software
              </li>
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
