import './App.css'
import DummyComponent from './components/DummyComponent'

function App() {
  return (
    <>
      <DummyComponent title="case1 - успешное выполнение" url="http://localhost:7070/data" />
      <DummyComponent title="case2 - получение 500" url="http://localhost:7070/error" />
      <DummyComponent title="case3 - индикатор загрузки" url="http://localhost:7070/loading" />
      <DummyComponent title="case4 - invalid json" url="http://localhost:7070/invalidjson" />
    </>
  )
}

export default App
