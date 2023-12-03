import {TLinkButtonProps} from "../Types"

export default function LinkButton({title, variant, url}: TLinkButtonProps) {
  return (
    <a href={url || "#"} className={`btn btn-${variant || "primary"}`}>{title}</a>
  )
}