import {TLink} from "../Types.ts"
import ItemLink from "./Link.tsx"

export default function HotNews({links}:{ links: TLink[] }) {
  return (
    <div className="quick-links">
      {links.map((link, idx) => {
        return (      
          <ItemLink classes="quick-links__item" key={idx}>
            <a href={link.url}>{link.title}</a>    
          </ItemLink>  
        )
      })}
    </div>
  )
}