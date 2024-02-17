import { useCallback, useState } from "react";
import "./Qualification.scss";
import QualificationDetails from "../qualificationDetails/QualificationDetails";

const Qualification = () => {
  const [activeTab, setActiveTab] = useState("education");

  const toggleTabs = useCallback((param) => {
    setActiveTab(param);
  });

  return (
    <section className="qualification">
      <div className="qualification__container container">
        <h2 className="qualification__title">Qualifications</h2>
        <ul className="qualification__menu">
          <li
            className={`qualification__tab${
              activeTab === "education" ? "--active" : ""
            }`}
            onClick={() => toggleTabs("education")}
          >
            <i class="uil uil-graduation-cap"></i> Education
          </li>
          <li
            className={`qualification__tab${
              activeTab === "experience" ? "--active" : ""
            }`}
            onClick={() => toggleTabs("experience")}
          >
            <i class="uil uil-suitcase-alt"></i> Experience
          </li>
        </ul>
      </div>
      <div className="qualification__details-container">
        <div className="qualification__details-div">
          {/* <div className="qualification__details">
            <div className="qualification__education">
              <h5 className="qualification__role">Software Developer</h5>
              <p className="qualification__employer">
                Freelance - Lethbridge, AB
              </p>
              <p className="qualification__date">
                <i class="bx bx-calendar"></i> Jul 2018 - Present
              </p>
            </div>
            <div className="qualification__timeline">
              <div className="qualification__dot"></div>
              <div className="qualification__line"></div>
            </div>
          </div>

          <div className="qualification__details--reverse">
            <div className="qualification__education">
              <h5 className="qualification__role">Software Developer</h5>
              <p className="qualification__employer">
                Freelance - Lethbridge, AB
              </p>
              <p className="qualification__date">
                <i class="bx bx-calendar"></i> Jul 2018 - Present
              </p>
            </div>
            <div className="qualification__timeline">
              <div className="qualification__dot"></div>
              <div className="qualification__line"></div>
            </div>
          </div>

          <div className="qualification__details">
            <div className="qualification__education">
              <h5 className="qualification__role">Software Developer</h5>
              <p className="qualification__employer">
                Freelance - Lethbridge, AB
              </p>
              <p className="qualification__date">
                <i class="bx bx-calendar"></i> Jul 2018 - Present
              </p>
            </div>
            <div className="qualification__timeline">
              <div className="qualification__dot"></div>
              <div className="qualification__line"></div>
            </div>
          </div>

          <div className="qualification__details--reverse">
            <div className="qualification__education">
              <h5 className="qualification__role">Software Developer</h5>
              <p className="qualification__employer">
                Freelance - Lethbridge, AB
              </p>
              <p className="qualification__date">
                <i class="bx bx-calendar"></i> Jul 2018 - Present
              </p>
            </div>
            <div className="qualification__timeline">
              <div className="qualification__dot"></div>
              <div className="qualification__line"></div>
            </div>
          </div>

          <div className="qualification__details">
            <div className="qualification__education">
              <h5 className="qualification__role">Software Developer</h5>
              <p className="qualification__employer">
                Freelance - Lethbridge, AB
              </p>
              <p className="qualification__date">
                <i class="bx bx-calendar"></i> Jul 2018 - Present
              </p>
            </div>
            <div className="qualification__timeline">
              <div className="qualification__dot"></div>
              <div className="qualification__line"></div>
            </div>
          </div>

          <div className="qualification__details--reverse">
            <div className="qualification__education">
              <h5 className="qualification__role">Software Developer</h5>
              <p className="qualification__employer">
                Freelance - Lethbridge, AB
              </p>
              <p className="qualification__date">
                <i class="bx bx-calendar"></i> Jul 2018 - Present
              </p>
            </div>
            <div className="qualification__timeline">
              <div className="qualification__dot"></div>
              <div className="qualification__line"></div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Qualification;
