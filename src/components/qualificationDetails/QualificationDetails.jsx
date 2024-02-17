import React from "react";
import "./QualificationDetails.scss";

const QualificationDetails = ({ title, employer, date, isReverse }) => {
  return (
    <div className={`details${isReverse ? "--reverse" : ""}`}>
      <div className="details__data">
        <h5 className="qualification__role">{title}</h5>
              <p className="qualification__employer">{ employer }</p>
        <p className="qualification__date">
          <i class="bx bx-calendar"></i> {date}
        </p>
      </div>
      <div className="qualification__timeline">
        <div className="qualification__dot"></div>
        <div className="qualification__line"></div>
      </div>
    </div>
  );
};

export default QualificationDetails;
