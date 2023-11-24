import Dropdown from './components/Dropdown.jsx'

function App() {
  let items = [
    {name: "Change Password", active: false },
    {name: "Become PRO", active: true },
    {name: "Help", active: false },
    {name: "Log Out", active: false },
  ];

  return (
    <Dropdown itemList={items} title={"Button dropdown"}/>
  )
}

export default App
