import React from 'react'
import ShopCard from '../ShopCard/ShopCard';

export default function CardsView(props) {
  const { cards } = props;
  return (
    <div className="cards-view">
      {cards.map((card, index) => <ShopCard key={index} card={card} />)}
    </div>
  )
}
