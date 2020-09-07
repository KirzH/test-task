import React from 'react';



export const CatCard = ({ title, name, taste, countOfPortions, gift, weight, borderColor, circleColor }) => {
    return (
        <div className="card" style={{ backgroundColor: borderColor }} >
            <div className="cnt" >
                <h6>{title}</h6>
                <h1>{name}</h1>
                <h3>{taste}</h3>
                <h5>{countOfPortions} порции <br />{gift} в подарок</h5>
                <div className="circle" style={{ backgroundColor: circleColor }}><h4>{weight} <p>кг</p></h4></div>
            </div>
        </div>
    );
};