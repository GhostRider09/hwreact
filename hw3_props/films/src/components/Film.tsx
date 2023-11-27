import Stars from './Stars.tsx'

type TFilmProperties = {
  id: number,
  title: string,
  description: string,
  rating: number,
  poster?: string,
}

const Film = ({id, title, description, rating, poster}: TFilmProperties) => {
  return (
    <div className="film" data-id={id}>
      <h1>{title}</h1>
      {poster ? <img src={poster} /> : ""}
      <p>{description}</p>
      <Stars count={rating} />
    </div>
  );
}

export default Film