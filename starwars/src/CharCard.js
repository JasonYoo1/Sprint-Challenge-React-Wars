import React from "react";

function CharCard(props){
    return(
        <div className='char-card'>
            <p>{props.name}</p>
            <p>{props.height}</p>
            <p>{props.mass}</p>
            <p>{props.hair_color}</p>
            <p>{props.skin_color}</p>
            <img src ={props.url}/>
        </div>
    )
}

export default CharCard;