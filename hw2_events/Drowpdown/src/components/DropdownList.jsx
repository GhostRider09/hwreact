import { useState } from 'react'
import DropdownItem from './DropdownItem.jsx';

const DropdownList = ({items}) => {
  const [ selectedItemId, changeSelected ] = useState(null);

  let selectItem = (e) => {
    changeSelected(e.target.dataset.id);
  }

  return (
    <ul className="dropdown">
      {items.map((el, idx) => {
        let selected = false;
        if ( !selectedItemId || selectedItemId === null ) {
          selected = el.active;
        } else if ( selectedItemId == idx ) {
          selected = true;
        }

        return <li key={idx}>
            <DropdownItem
              id={idx} 
              name={el.name} 
              active={selected} 
              onClick={selectItem} 
            />
          </li>
      })}
    </ul>
  );
}

export default DropdownList;