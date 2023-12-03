import {THotLink} from "../../Types.ts"
import ItemLink from "../Link.tsx"

export default function HotLinks({links}: {links: THotLink[]}) {
  return (
    <div className="hot-links">
      {links.map((link, idx) => {
        let classes = ( link.active === 1 ? "hot-links__item __active" : "hot-links__item" );
        return (      
          <ItemLink classes={classes} key={idx}>
            <a href={link.url}>{link.title}</a>    
          </ItemLink>  
        )
      })}
      <div className="hot-links__date">{(new Date()).toUTCString()}</div>
    </div>
  )
}