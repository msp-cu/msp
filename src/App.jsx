import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Join from "./Pages/Join"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/join" element={<Join />} />
    </Routes>
  )
}

export default App
