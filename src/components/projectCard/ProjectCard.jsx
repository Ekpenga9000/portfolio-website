import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import CFA from "../../assets/images/careforall.png";
import "./projectCard.scss";

const ProjectCard = () => {
  return (
    <section>
      <div className="professionalCard__card">
        <div className="professionalCard__img-div">
          <img src={CFA} alt="" className="professionalCard__img"/>
        </div>
        <div className="professionalCard__card-body">
          <h3>Care for all</h3>
          <p>
            This is a website that we built for a client. It is a fully
            responsive website that is optimized for SEO.
          </p>
          <a href="">
            <FaExternalLinkAlt />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
