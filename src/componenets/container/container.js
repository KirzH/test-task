import React from 'react';
import './container.scss';
import { CatCard } from '../cat-card/cat-card';



const CatsCards = [{
    title: "Сказочное заморское яство",
    name: "Нямушка",
    taste: "с фуа-гра",
    countOfPortions: 10,
    gift: "мышь",
    weight: "0.5",
    borderColor: "#1698d9",
    circleColor: "#1698d9",
},
{
    title: "Сказочное заморское яство",
    name: "Нямушка",
    taste: "с рыбой",
    countOfPortions: 40,
    gift: "2  мыши",
    weight: "2",
    borderColor: "#d91667",
    circleColor: "#d91667",
},
{
    title: "Сказочное заморское яство",
    name: "Нямушка",
    taste: "с курой",
    countOfPortions: 100,
    gift: "5 мышей",
    weight: "5",
    borderColor: "#a5a5a5",
    circleColor: "#a5a5a5",
}];


const Container = () => {
    return (
        <div className="block">
            {CatsCards.map((item, index) => <CatCard key={index} title={item.title} name={item.name}
                taste={item.taste} countOfPortions={item.countOfPortions} gift={item.gift} weight={item.weight}
                borderColor={item.borderColor} circleColor={item.circleColor} />)}
        </div>
    );
};

export default Container; 