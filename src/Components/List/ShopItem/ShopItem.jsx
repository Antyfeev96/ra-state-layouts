export default function ShopItem(props) {
  const { item } = props;
  return (
    <div className="list-view__item">
      <img className="img" src={item.img} alt={item.name}/>
      <div className="name">{item.name}</div>
      <div className="color">{item.color}</div>
      <span className="price">${item.price}</span>
      <button className="button">Add to Cart</button>
    </div>
  )
}
