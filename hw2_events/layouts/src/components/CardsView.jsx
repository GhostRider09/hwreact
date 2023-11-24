import ShopCard from './ShopCard.jsx'

const CardsView = ({ cards }) => {
  const renderCards = (cards) => {
    return cards.map((card, i) => {
      return (
        <div className="col" key={`card-${i}`}>
          <ShopCard {...card} />
        </div>
      );
    });
  };

  return (
    <div className="row">
      {renderCards(cards)}
    </div>
  );
};

export default CardsView