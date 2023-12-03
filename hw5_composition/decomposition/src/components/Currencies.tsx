import {TCurrency} from "../Types.ts"

export default function Currencies({items}:{items: TCurrency[]}) {
  return (
    <div className="currencies">
      {items.map((item, idx) => {
        return (      
          <div className="currencies__item" key={idx}>
            <span className="currencies__title">{item.title}</span>
            <span className="currencies__value">{item.value}</span>
            <span className="currencies__changes">{item.change}</span>
          </div>  
        )
      })}
    </div>
  )
}