import Item from "./Item.tsx"
import {TListingProperties} from "../Types.ts"

const Listing = ({items}: TListingProperties) => {
  return (
    <div className="item-list">
      {items.map((item, idx) => <Item item={item} key={idx} />)}
    </div>
  )
}

export default Listing