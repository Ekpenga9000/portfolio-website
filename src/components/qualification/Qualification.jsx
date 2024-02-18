import { useCallback, useState } from "react";
import "./Qualification.scss";
import data from "../../assets/data/resumeData.json";
import data2 from "../../assets/data/educationData.json";
import QualificationDetails from "../qualificationDetails/QualificationDetails";
import Modal from "../modal/Modal";

const Qualification = () => {
  const experiences = data.experience;
  const education = data2.education;
  const [activeTab, setActiveTab] = useState("education");
  const [modalId, setModalId] = useState(1);
  const [activeModal, setActiveModal] = useState(false); 
  const toggleTabs = useCallback((param) => {
    setActiveTab(param);
  });

    const activateModal = (id) => {
      setModalId(id); 
      setActiveModal(true);
  };

  const deactivateModal = () => {
    setActiveModal(false);
  }

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
            <i className="uil uil-graduation-cap"></i> Education
          </li>
          <li
            className={`qualification__tab${
              activeTab === "experience" ? "--active" : ""
            }`}
            onClick={() => toggleTabs("experience")}
          >
            <i className="uil uil-suitcase-alt"></i> Experience
          </li>
        </ul>
      </div>
      <div className="qualification__details-container">
        <div className="qualification__details-div">
          {activeTab === "experience" &&
            experiences.map(
              ({ id, title, isReverse, employer, dates, type }) => {
                return (
                  <QualificationDetails
                    key={id}
                    id={id}
                    dates={dates}
                    isReverse={isReverse}
                    title={title}
                    employer={employer}
                    type={type}
                    activateModal={activateModal}
                  />
                );
              }
            )}

          {activeTab === "education" &&
            education.map(({ id, title, isReverse, employer, dates, type }) => {
              return (
                <QualificationDetails
                  key={id}
                  id={id}
                  dates={dates}
                  isReverse={isReverse}
                  title={title}
                  employer={employer}
                  type={type}
                />
              );
            })}
        </div>
      </div>
      {activeModal && <div className="qualification__modal">
        <Modal id={modalId} deactivateModal={ deactivateModal } />
      </div>}
    </section>
  );
};

export default Qualification;
