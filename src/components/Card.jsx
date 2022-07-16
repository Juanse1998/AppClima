import React from 'react';
import './Card.css';

export default function Card ({min, max, name, img, onClose, id}) {
    return (
      <div className="card">
        <div id="closeIcon" className="row">
            <button onClick={onClose} className="btn">X</button>
        </div>
        <div className="card-body" >
          <h5 className="card-title" style={{color: 'black'}}>{name}</h5>
          <div className="row">
            <div className="col-sm-4 col-md-4 col-lg-4">
              <p className="textMinMax">Min</p>
              <p className="numberIndi">{min}°</p>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
              <p className="textMinMax">Max</p>
              <p className="numberIndi">{max}°</p>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
              <img className="iconoClima" src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} width="80" height="80" alt="" />
            </div>
          </div>
        </div>
      </div>
    );
};
