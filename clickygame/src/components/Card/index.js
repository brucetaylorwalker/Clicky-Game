import React from "react";
import "./card.css";

function Card(props) {
    return (
        <div
            style={{ backgroundImage: `url(${props.image})` }}
            key={props.id}
            className="car-card col-md-3"
            onClick={() => props.handleClicked(props.id)}
            
            >
            {props.name}
        </div>
    )
}

export default Card;