import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import Success from "./pages/success";
import NotFound from "./pages/NotFound";

const App = ()=>{
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/success" element={<Success/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
      <Toaster/>
    </Router>
  )
}

export default App;