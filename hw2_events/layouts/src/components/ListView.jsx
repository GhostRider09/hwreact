import ShopItem from "./ShopItem"

const ListView = ({items}) => {
  const renderProductsItems = (items) => {
    return items.map((item, i) => {
      return (
        <li className="list-item" key={i}>
          <ShopItem {...item} />
        </li>
      );
    });
  };

  return (
    <ul className="list">
      {renderProductsItems(items)}
    </ul>
  );
};

export default ListView