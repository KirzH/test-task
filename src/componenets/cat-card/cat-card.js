import React from 'react';
 
export const CatCard = ({title, name, taste, countOfPortions, gift, backgroundUrl}) => {
    return (
        <div className="cnt" style={{backgroundImage: backgroundUrl }}>
                <h5 className="a1">{title}</h5>
                <h1 className="b1">{name} <p className="b2">{taste}</p></h1>
                <h5 className="a2">{countOfPortions} порции <p>{gift} в подарок</p></h5>
               <div className="c1"> <div className="circle1"></div></div>
            </div>
    )
}