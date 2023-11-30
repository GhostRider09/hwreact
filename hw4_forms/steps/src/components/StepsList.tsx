import {TStepsListProps} from '../Types.ts'
import ListItem from './ListItem'

export default function StepsList({list, onChangeList}: TStepsListProps) {
  list = list.sort((a, b) => {
    return a.id > b.id ? -1 : 1;
  });

  return (
    <div className="steps__list item-list">
      <div className="item-list__container">
        <div className="item-list__table">
          <table>
            <thead>
              <tr>
                <td>Дата</td>
                <td className='__centered'>Пройдено, км</td>
                <td className='item-list__col-action __centered'>Действия</td>
              </tr>
            </thead>
            <tbody>
              {list.map((row, idx) => <ListItem 
                key={idx} 
                item={row}  
                onChangeList={onChangeList} />
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}