import { useState } from "react";
import "./Projects.scss";
import Swiper from "../swiper/Swiper";
import Video from "../video/Video";

const Projects = () => {
  const [displayVideo, setDisplayVideo] = useState(false);

  return (
    <section className="projects" id="projects">
      <div className="projects__container container">
        <h2 className="projects__title">Projects</h2>
        <span className="projects__subtitle">What I'm up to</span>
        <div className="projects__carousel-div">
          <div className="projects__carousel">
            {!displayVideo && <Swiper />}
            {displayVideo && <Video />}
          </div>
          <h4 className="projects__h4">Kubi - Project management software</h4>
          <p className="projects__message">
            I'm developing Kubi, project management software inspired by Jira,
            built on scrum protocols. While deployed, the sign-up feature is
            currently disabled for major updates. You can explore the code base
            or watch a recorded demo in the meantime.
          </p>
          <div className="projects__btn-div">
            <a
              href="https://github.com/Ekpenga9000/kubi-client"
              className="projects__link"
            >
              <i className="uil uil-github-alt"></i>
            </a>
            <span className="projects__link">
              {!displayVideo && (
                <i
                  className="uil uil-play"
                  onClick={() => setDisplayVideo(!displayVideo)}
                ></i>
                          )}
                          {displayVideo && (
                <i
                  className="uil uil-square-shape"
                  onClick={() => setDisplayVideo(!displayVideo)}
                ></i>
              )}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
