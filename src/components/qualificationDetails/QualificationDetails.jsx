import React from "react";
import "./QualificationDetails.scss";

const QualificationDetails = ({
  id,
  title,
  employer,
  dates,
  isReverse,
    type,
    activateModal
}) => {

    const handleModal = () => {
        activateModal(id);
  }
  return (
    <div className={`details${isReverse ? "--reverse" : ""}`}>
          {type === "experience" && <>
              <div className="details__data" onClick={handleModal}>
                  <h5 className="details__role">{title}</h5>
                  <p className="details__employer">{employer}</p>
                  <p className="details__date">
                      <i className="bx bx-calendar"></i> {dates}
                  </p>
              </div>
              <div className="details__timeline">
                  <div className="details__dot"></div>
                  <div className="details__line"></div>
              </div>
          </>}
          {type !== "experience" && <>
              <div className="details__edu">
                  <h5 className="details__role">{title}</h5>
                  <p className="details__employer">{employer}</p>
                  <p className="details__date">
                      <i className="bx bx-calendar"></i> {dates}
                  </p>
              </div>
              <div className="details__timeline">
                  <div className="details__dot"></div>
                  <div className="details__line"></div>
              </div>
          </>}
    </div>
  );
};

export default QualificationDetails;
