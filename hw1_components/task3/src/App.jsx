import './App.css'
import Calendar from './components/Calendar.jsx'

function App() {
  const now = new Date(2024, 10, 29);

  return (
    <Calendar date={now} />
  )
}

export default App
