import React from 'react';
import './container.scss';
import {CatCard} from '../cat-card/cat-card';


const CatsCards = [{
    title: "Сказочное заморское яство",
    name: "Нямушка",
    taste: "с дичью",
    countOfPortions: 840,
    gift: "42 мыши"
},
{
    title: "Сказочное заморское яство",
    name: "Нямушка",
    taste: "с колбаскай",
    countOfPortions: 480,
    gift: "288 мыши"
},
{
    title: "Сказочное заморское яство",
    name: "Нямушка",
    taste: "с рыбой",
    countOfPortions: 40,
    gift: "2 мыши"
}]

const Container = () => {
    return (
        <div className="block">
            
            {CatsCards.map((item, index) => <CatCard key={index} title={item.title} name={item.name} taste={item.taste} countOfPortions={item.countOfPortions} gift={item.gift}/>)}
        </div>
    );
};

export default Container; 