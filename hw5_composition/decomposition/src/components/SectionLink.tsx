import {TLink} from "../Types.ts"

export default function SectionLink({item}: {item: TLink}) {
  let renderLink = (item: TLink): JSX.Element => {
    if ( item.type === "tv" ) {
      return (
        <div className="links-section__item __tv">
          <div className="links-section__time">{item.time}</div>
          <a href={item.url} className="links-section__link">{item.title}</a>
          <div className="links-section__hint">{item.hint}</div>
        </div>
      );
    } 
    
    if ( item.type === "media" ) {
      return (
        <div className="links-section__item __media">
          <svg xmlns="http://www.w3.org/2000/svg" >
            <g xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <path 
                d="M10.965 9.172a15.248 15.248 0 0 1 3.922 2.16.75.75 0 0 1 0 1.23 15.001 15.001 0 0 1-3.922 2.16.824.824 0 0 1-1.178-.75 24.344 24.344 0 0 1 0-4.05.833.833 0 0 1 1.178-.75Z"
                fill="currentColor" ></path>
              <path 
                fill="currentColor" 
                fillRule="evenodd" 
                d="M12 1.5A8 8 0 0 0 4.399 12a8 8 0 1 0 15.203 0A8 8 0 0 0 12 1.5Zm-6 8a6 6 0 1 1 11.606 2.143L17.47 12l.136.357a6 6 0 1 1-11.213 0L6.53 12l-.136-.357A5.984 5.984 0 0 1 6 9.5Z" 
                clipRule="evenodd" ></path>
            </g>
          </svg>
          <a href={item.url} className="links-section__link">{item.title}</a>
          <div className="links-section__hint">{item.hint}</div>
        </div>
      )   
    }
    
    if ( item.type === "popular" ) {
      return (
        <div className="links-section__item __popular">
          <a 
            href={item.url} 
            className="links-section__link" 
            target="_blank">{item.title}</a>&nbsp;&mdash;&nbsp;<span>{item.hint}</span>
        </div>
      )   
    }

    return (
      <div className="links-section__item">
        <a href={item.url} className="links-section__link" target="_blank">{item.title}</a>
      </div>
    );
  } 

  return renderLink(item);
}