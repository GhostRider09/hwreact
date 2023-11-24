import { useState } from 'react'
import Button from './Button.jsx';
import DropdownList from './DropdownList.jsx';

const Dropdown = ({itemList, title}) => {
  const [ isOpen, changeIsOpen ] = useState(false);

  let toggleOpen = (e) => {
    changeIsOpen( !isOpen );
  }

  return (
    <div className="container">
      <div data-id="wrapper" className={`dropdown-wrapper ${isOpen ? 'open' : ''}`}>
        <Button title={title} onClick={toggleOpen} />
        <DropdownList items={itemList} />
      </div>
    </div>
  )
}

export default Dropdown