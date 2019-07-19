import React from "react";

function CharCard(props){
    return(
        <div className='char-card'>
            <h2>{props.name}</h2>
            <p>{props.height}</p>
            <p>{props.mass}</p>
            <p>{props.hair_color}</p>
            <p>{props.skin_color}</p>
        </div>
    )
}

export default CharCard;