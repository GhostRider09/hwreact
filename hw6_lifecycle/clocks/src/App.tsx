import './App.css'
import {useState} from 'react'
import Form from './components/Form';
import Clock from './components/Clock';
import { TClock } from './Types';

function App() {
  let initItem: TClock[] = [];
  const [ clocksList, changeClocksList ] = useState(initItem);

  let removeClock = (id: string) => {
    changeClocksList(prevList => {
      return prevList.filter(clock => clock.id !== id);
    })
  }

  return (
    <div className='container'>
      <Form onChangeList={changeClocksList} />
      <div className='clock-list'>
        {clocksList.map(clock => <Clock 
          clockData={clock}           
          removeClockById={removeClock}
          key={clock.id} />
        )}
      </div>
    </div>
  )
}

export default App
