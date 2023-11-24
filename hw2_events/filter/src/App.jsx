import { useState } from 'react'
import './App.css'
import Toolbar from './components/Toolbar.jsx';
import Portfolio from './components/Portfolio.jsx';

function App({filters, photos}) {
  const [selectedFilter, changeSelectedFilter] = useState("All");

  let onChangeFilter = (currentFilter) => {
    if ( currentFilter !== selectedFilter ) {
      changeSelectedFilter(currentFilter);
    }
  }

  let filteredPhotos = photos;
  if ( selectedFilter !== "All" ) {
    filteredPhotos = photos.filter(item => item.category === selectedFilter);
  }

  return (
    <>
      <Toolbar
        filters={filters}
        selected={selectedFilter}
        onSelectFilter={onChangeFilter}
      />
      <Portfolio items={filteredPhotos}/>
    </>
  )
}

export default App
