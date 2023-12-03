import {THotNewsItem} from "../../Types.ts"
import ItemLink from "../Link.tsx"

export default function HotNews({news}:{ news: THotNewsItem[] }) {
  return (
    <div className="hot-news">
      {news.map((link, idx) => {
        return (      
          <ItemLink classes="hot-news__item" key={idx}>
            <div className="hot-news__image">
              <img src={link.icon} alt="" />
            </div>
            <a href={link.url}>{link.title}</a>    
          </ItemLink>  
        )
      })}
    </div>
  )
}