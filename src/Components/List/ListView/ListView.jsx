import ShopItem from "../ShopItem/ShopItem";

export default function ListView(props) {
  const { items } = props;
  return (
    <div className="list-view">
      {items.map((item, index) => <ShopItem key={index} item={item} />)}
    </div>
  )
}
