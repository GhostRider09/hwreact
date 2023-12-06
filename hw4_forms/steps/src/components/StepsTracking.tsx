import {useState} from 'react'
import StepsList from './StepsList'
import StepsForm from './StepsForm'
import {TListItem} from '../Types'

export default function StepsTracking() {
  let initItems: TListItem[] = [];
  const [items, changeItems] = useState(initItems);
  const [updateId, setUpdateId] = useState(0);

  let changeItemButtonClick = (id: number): void => {
    setUpdateId(id);
  }

  let getItemById = (id: number) => {
    let filtered = items.filter(item => item.id === id).shift();

    return ( filtered !== undefined ? filtered : null);
  }

  return (
    <div className="steps">
      <StepsForm 
        updatingItem={getItemById(updateId)} 
        onSetUpdate={setUpdateId}
        onChangeList={changeItems} />
      <StepsList 
        list={items} 
        onChangeList={changeItems} 
        onSetUpdate={changeItemButtonClick} />
    </div>
  )
}