import { TCard } from "../Types";
import Card from "./Card"
import { useState, useEffect } from 'react'

export default function Cards({upd, loadItems, deleteItem}:{
  upd: number,
  loadItems: Function,
  deleteItem: Function
}) {
  let init: TCard[] = [];
  const [cardList, changeCardList] = useState(init);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    loadItems().then((data: TCard[]) => {
      changeCardList(data);
      setLoaded(true);
    }).catch(() => {
      setLoaded(true);
      alert('Ошибка выполнения запроса! Сервер недоступен!');
    });
  }, []);
  
  useEffect(() => {
    if ( upd !== 0 ) {
      loadItems().then((data: TCard[]) => {
        changeCardList(data);
      }).catch(() => {
        alert('Ошибка выполнения запроса! Сервер недоступен!');
      });
    }
  }, [upd]);

  let updateListHandler = () => {
    loadItems().then((data: TCard[]) => {
      changeCardList(data);
    }).catch(() => {
      alert('Ошибка выполнения запроса! Сервер недоступен!');
    });
  }

  let render = () => {
    if ( cardList.length ) {
      return cardList.map((card, idx) => <Card 
        card={card} 
        deleteItem={deleteItem}
        key={idx} />
      );
    } else {
      return ( !loaded ? <p>Loading...</p> : <></> );
    }
  }
  
  return (
    <div>
      <h1>
        <span>Notes</span>
        <button 
          type='button' 
          onClick={updateListHandler}>Обновить</button>
      </h1>
      <div className="card-list">
          {render()}          
      </div>
    </div>
  )
}