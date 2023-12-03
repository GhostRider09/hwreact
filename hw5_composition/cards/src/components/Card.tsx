import LinkButton from "./LinkButton";
import { TCardProps } from "../Types";


export default function Card({title, text, buttonTitle, url, variant, children}: TCardProps) {
  return (
    <div className="card" style={{width: "18rem"}}>
      <div className="card-body">
        {children}
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <LinkButton title={buttonTitle} variant={variant} url={url} />
      </div>
    </div>     
  )
}