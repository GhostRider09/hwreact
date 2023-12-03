import HotLinks from "./HotLinks.tsx"
import HotNews from "./HotNews.tsx"
import Currencies from "../Currencies.tsx"
import {THotLink, THotNewsItem, TCurrency} from "../../Types.ts"

export default function News({hotLinks, hotNews, currencies}: {
  hotLinks: THotLink[], 
  hotNews: THotNewsItem[], 
  currencies: TCurrency[]
}) {
  return (
    <div className="panel__news">
      <HotLinks links={hotLinks} />
      <HotNews news={hotNews} />
      <Currencies items={currencies} />
    </div>
  )
}