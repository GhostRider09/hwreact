import { TPromoLinkProps } from "../Types";
import ItemLink from "./Link";

export default function Promo({title, url, desc, image}: TPromoLinkProps) {
  return (
    <div className="panel__promo">
      <ItemLink classes="promo-link">
        <div className="promo-link__image">
          <img src={image} alt="" />
        </div>
        <a href={url} className="promo-link__link">{title}</a>
        <p className="promo-link__desc">{desc}</p>
      </ItemLink>
    </div>
  )
}