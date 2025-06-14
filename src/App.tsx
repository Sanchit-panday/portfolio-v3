// import './App.css'
import {
  BrowserRouter, Routes, Route,
  // Navigate
} from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
