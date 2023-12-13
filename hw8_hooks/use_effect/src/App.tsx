import './App.css'
import { useState } from 'react'
import { TUserListItem } from './Types';
import List from './components/List';
import Details from './components/Details';

function App() {
  const [userItem, selectUserItem] = useState<TUserListItem|null>(null);

  return (
    <div className='container'>
      <List id={userItem ? userItem.id : null} onSelect={selectUserItem} />
      <Details info={userItem} />
    </div>
  )
}

export default App
