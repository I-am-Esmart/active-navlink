import { useState } from "react"
import { Route, Routes, BrowserRouter } from "react-router-dom"
import MainPage from "./components/MainPage"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <MainPage />
      </BrowserRouter>
    </div>
  )
}

export default App
