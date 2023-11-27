import {TItemProperties} from "../Types.ts"

const Item = ({item}: TItemProperties) => {
  if ( !item.title ) {
    return (<></>);
  }

  let quantityLevel = ( item.quantity < 10 ? "low" : ( item.quantity < 20 ? "medium" : "high" ) );

  let printPrice = (price: string, currency: string): string => {
    switch (currency) {
      case 'USD': 
        return "$" + price;
      case 'EUR': 
        return `€${price}`;
      case 'GBP': 
      default: 
        return `£${price}`;
    }
  }

  return (
    <div className="item" data-id={item.listing_id}>
      <div className="item-image">
        <a href={item.url}>
          <img src={item.MainImage} />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{item.title}</p>
        <p className="item-price">{printPrice(item.price, item.currency_code)}</p>
        <p className={`item-quantity level-${quantityLevel}`}>{item.quantity} left</p>
      </div>
    </div>
  )
}

export default Item