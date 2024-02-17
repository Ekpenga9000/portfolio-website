import React from 'react';
import "./Card.scss";

const Card = ({ src, alt, title, text, icon }) => {
  return (
      <div className='card'>
          <div className='card__container'>
              <i className={ icon + " card__icon" }></i>
              <h5 className='card__title'>title</h5>
              <p className='card__msg'>message</p>
          </div>
    </div>
  )
}

export default Card