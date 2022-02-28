import React from "react";

const Card = (props) =>{
    return(
        <div className="card">
            <img src={props.cardImgUrl} alt="cardProfileImg"></img>
            <p>Name: {props.cardName}</p>
            <p>Gender: {props.cardGender}</p>
            <p>Date of Birth: {props.cardDOB}</p>
        </div>
    )
};

export default Card;