import {TLink} from "../Types.ts"
import SectionLink from "./SectionLink.tsx"

export default function SectionLinks({links}: { links: TLink[] }) {
  return (
    <div className="section__links links-section">
      {links.map((link, idx) => <SectionLink item={link} key={idx} />)}
    </div>
  )
}