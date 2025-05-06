import Nav from "./Nav/Nav";
import Homepage from "./Homepage/Homepage";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
