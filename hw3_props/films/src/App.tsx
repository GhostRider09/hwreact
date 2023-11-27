import './App.css'
import Films from './components/Films.tsx'

function App() {
  let films = [
    {
      id: 1,
      title: "Фильм 1",
      description: "Просто очень крутой фильм, но со средней оценкой",
      rating: 2,
    },
    {
      id: 2,
      title: "Фильм 2",
      description: "Крутой фильм про супермена",
      rating: 5,
      poster: "/img/image1.jpg",
    }
  ];


  return (
    <>
      <Films films={films} />
    </>
  )
}

export default App
