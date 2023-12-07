import { useState } from 'react';
import { TCard } from './Types';
import './assets/styles/style.scss'
import Cards from './components/Cards'
import Form from './components/Form'

function App() {
  const [updated, setUpdated] = useState(0);
  let host = "http://localhost:7070"

  async function addNote(card: Omit<TCard, "id">) {
    return await fetch(host + "/notes", {
      method: "POST",
      body: JSON.stringify(card)
    }).then(() => {
      setUpdated((new Date()).getTime());
    })
  }

  async function loadingItems() {
    let response = await fetch(host + "/notes");

    return await response.json();
  }

  async function deleteItem(id: number) {
    return await fetch(host + "/notes/" + id, {
      method: "DELETE"
    }).then(() => {
      setUpdated((new Date()).getTime());
    });
  }

  return (
    <div className='container'>
      <Cards 
        upd={updated} 
        loadItems={loadingItems} 
        deleteItem={deleteItem} />
      <Form addNoteHandler={addNote} />
    </div>
  )
}

export default App
