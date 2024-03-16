// TODO: create a component that displays a single bakery item
import bakeryData from "../assets/bakery-data.json";

export default function BakeryItem({
  name,
  item,
  image,
  description,
  price,
  toCart,
  index
}) {
  return (
    <div className="bakery_item">
      <h2 key={index}>{name}</h2>
      <img src={image} alt={name} />
      <h3>{description}</h3>
      <h3>${price}</h3>
      <button onClick={() => toCart(item)}>Add to Cart</button>
    </div>
  );
}
