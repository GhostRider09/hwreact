import { useState } from 'react'
import IconSwitch from './IconSwitch.jsx'
import ListView from './ListView.jsx'
import CardsView from './CardsView.jsx'

function Store({products, mode = "view_module"}) {
  const [viewMode, setViewMode] = useState(mode);

  let isListViewMode = () => viewMode === "view_list";
  let onSwitchMode = () => {
    setViewMode(viewMode === "view_list" ? "view_module" : "view_list")
  };

  let renderItems = (products, isList = true) => {
    if ( isList ) {
      return (
        <ListView items={products} />
      )
    }

    return (
      <CardsView cards={products} />
    )
  }

  return (
    <div>
      <div className="toolbar">
        <IconSwitch icon={viewMode} onSwitch={onSwitchMode}/>
      </div>
      {renderItems(products, isListViewMode())}
    </div>
  )
}

export default Store