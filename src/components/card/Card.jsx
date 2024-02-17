import React from "react";
import "./Card.scss";

const Card = ({ title, message, icon }) => {
  return (
    <div className="card">
      <i className={icon + " card__icon"}></i>
      <h5 className="card__title">{title}</h5>
      <p className="card__msg">{message}</p>
    </div>
  );
};

export default Card;
