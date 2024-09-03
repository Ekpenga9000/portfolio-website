import React from "react";
import "./ProfessionalProjects.scss";
import ProjectCard from "../projectCard/ProjectCard";
import CFA from "../../assets/images/careforall.png";

const ProfessionalProjects = () => {
  return (
    <section className="professionalProjects">
      <div className="professionalProjects__container container">
        <h2 className="professionalProjects__title">Professional Works</h2>
        <span className="professionalProjects__subtitle">
          Some professional Gigs of mine
        </span>
        <div>
          <ProjectCard />
        </div>
      </div>
    </section>
  );
};

export default ProfessionalProjects;
