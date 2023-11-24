import React from 'react';

class ShopItemClass extends React.Component {
  printPrice = () => {
    return this.props.item.currency + this.props.item.price.toFixed(2)
  }

  render () {
    const item = this.props.item;

    return (
      <div className="main-content">
        <h2>{item.brand}</h2>
        <h1>{item.title}</h1>
        <h3>{item.description}</h3>
        <div className="description">{item.descriptionFull}</div>
        <div className="highlight-window mobile">
          <div class="highlight-overlay"></div>
        </div>
        <div className="divider"></div>
        <div className="purchase-info">
          <div className="price">{this.printPrice()}</div>
          <button>Добавить в корзину</button>
        </div>
      </div>
    );
  }
}

export default ShopItemClass