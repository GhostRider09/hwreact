import './App.css'
import Card from './components/Card'
import { TCardProps } from "./Types";

function App() {
  let card:TCardProps = {
    title: "Card title1",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    buttonTitle: "Go somewhere",
    url: "#",
    variant: "warning"
  }

  return (
    <>
      <Card {...card}>
        <img src="https://img.freepik.com/free-photo/cute-domestic-kitten-sits-window-staring-outside-generative-ai_188544-12519.jpg?w=900&t=st=1701527603~exp=1701528203~hmac=e1fb4cdb06d0c9c0a5b7f3eb1f5d21afd9e616e1b47e0d67a1635bc556219bcb" className="card-img-top" alt="picture" />
      </Card>
      <br/><br/>
      <Card {...card} />
    </>
  )
}

export default App
