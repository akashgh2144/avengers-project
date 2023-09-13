/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Card = ({selectActors,remaining,totalCost}) => {
    console.log(selectActors);
    
    return (
        <div>
             <h5>Total Actors:{selectActors.length}</h5>
             <h5>Total Remaining:{remaining}</h5>
             <h5>Total Cost:{totalCost}</h5>
             {
                selectActors.map(actor =>(
                   <li key={actor.id} >{actor.name}</li>
                ))
             }
        </div>
    );
};

export default Card;