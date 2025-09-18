import HeaderComponent from "./Header"
import { Route, Routes, BrowserRouter } from "react-router-dom";
import SignComponent from "./Sign";

function App() {

  return (
    <>
    <BrowserRouter>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<SignComponent />}></Route>
        <Route path="/sign-in" element={<SignComponent />}></Route>
        <Route path="/home"></Route>
        <Route path="/store"></Route>
        <Route path="/contact"></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
