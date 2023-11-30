import {useState} from 'react'
import StepsList from './StepsList'
import StepsForm from './StepsForm'
import {TListItem} from '../Types'

export default function StepsTracking() {
  let initItems: TListItem[] = [];
  const [items, changeItems] = useState(initItems);

  return (
    <div className="steps">
      <StepsForm onChangeList={changeItems} />
      <StepsList list={items} onChangeList={changeItems} />
    </div>
  )
}