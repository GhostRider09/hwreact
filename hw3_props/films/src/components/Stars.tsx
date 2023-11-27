import Star from './Star.tsx'

type StarProperties = {
  count: number
}

const Stars = ({count}: StarProperties) => {
  if ( count < 0 || count > 5 ) {
    return (<></>);
  }

  let starsKey = [];
  for ( let i=1;i<=count;i++) {
    starsKey.push(i);
  }

  return (
    <ul className="card-body-stars u-clearfix">
      {starsKey.map(id => <li data-id={id} key={id}><Star /></li>)}
    </ul>
  );
}

export default Stars