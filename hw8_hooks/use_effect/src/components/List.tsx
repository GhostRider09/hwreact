import { useEffect, useState, MouseEvent } from "react";
import { TUserListItem } from "../Types"
import ListItem from "./ListItem";

export default function List({id, onSelect}:{
  id: number | null
  onSelect: React.Dispatch<React.SetStateAction<TUserListItem|null>>}
) {
  const [items, setItems] = useState<TUserListItem[]>([]);

  useEffect(() => {
    const fetchList = async (url: string) => {
      const response = await fetch(url);
  
      return await response.json();
    }

    fetchList(import.meta.env.VITE_SOURCE_URL + "users.json")
      .then(items => setItems(items));
  }, []);

  const selectItemHandler = (e: MouseEvent<HTMLUListElement>) => {
    if ( e.target instanceof HTMLElement ) {
      const clickedId = ( e.target.dataset.id ? parseInt(e.target.dataset.id) : 0 );
      const selectedItem = items.filter(item => item.id === clickedId);
      
      onSelect(selectedItem[0] || null);
    }
  }

  return (
    <div>
      <ul>
        {items.map((item) => <ListItem 
          selected={item.id === id}
          userItem={item} 
          onClick={selectItemHandler}          
          key={item.id} />)}
      </ul>
    </div>
  )
}