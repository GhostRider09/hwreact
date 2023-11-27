import Film from './Film.tsx'

type TPropsCollection = {
  films: TFilm[]
}

type TFilm = {
  id: number,
  title: string,
  description: string,
  rating: number,
  poster?: string,
}

const Films = ({films}: TPropsCollection) => {
  return (
    <div className="films__container">
      {films.map((film, idx) => <Film {...film} key={idx} />)}
    </div>
  );
}

export default Films