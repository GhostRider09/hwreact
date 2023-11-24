import Button from "./Button.jsx"

const ShopCard = ({ name, price, color, img }) => {
  return (
    <div className="shop-card">
      <div className="title">{name}</div>
      <div className="desc">{color}</div>
      <div className="slider">
        <figure>
            <img src={img} alt={name}/>
        </figure>
      </div>
      <div className="cta">
        <div className="price">{price}</div>
        <Button label="Add to cart"/>
      </div>
    </div>
  );
};

export default ShopCard