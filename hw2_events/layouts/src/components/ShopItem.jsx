import Button from "./Button.jsx"

const ShopItem = ({ name, price, color, img }) => {
  return (
    <div className="shop-item">
      <div className="thumb">
        <figure>
          <img src={img} alt={name}/>
        </figure>
      </div>
      <div className="title">{name}</div>
      <div className="desc">{color}</div>
      <div className="price">{price}</div>
      <Button label="Add to cart"/>
    </div>
  );
};

export default ShopItem