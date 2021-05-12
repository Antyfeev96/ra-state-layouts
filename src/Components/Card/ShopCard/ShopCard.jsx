import React from 'react'

export default function ShopCard(props) {
  const { card } = props;
  console.log(card);
  return (
    <div className="cards-view__card">
      <div className="name">{card.name}</div>
      <div className="color">{card.color}</div>
      <img className="img" src={card.img} alt={card.name}/>
      <span className="price">{card.price}</span>
      <button className="button">Add to Cart</button>
    </div>
  )
}
