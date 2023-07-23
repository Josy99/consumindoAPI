import { BrowserRouter } from "react-router-dom"
import { Header } from "./components/Header"
import { Router } from "./Router"

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  )
}
export default App
