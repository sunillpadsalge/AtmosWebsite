import React from 'react';
import img1 from "../atmos_logo.jpg";
import "./card-style.css";
const Card= props => {
return(
<div className="card text-center shadow">
    <div className="overflow">
        <img src={props.imgsrc} style={{height:"250px"}} alt='Image1' className="card-img-top"/>
    </div>
    <div className="card-body text-dark">
        <h4 className="card-title">
            {props.title}  
        </h4>
        <p className="card-text text-secondary">Atmos Academy welcomes you to get well trained here in pune and achieve excellence & 
        mastery in any course that you select. We always appreciate the talent that lies within you & 
        its our responsibility to empower you to achieve your goals.</p>
        <a href="/" className="btn btn-outline-success">Services</a>

    </div>
</div>

);
}
export default Card;