import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Careers from "./pages/careers";
import Navbar from "./components/navbar";

function App() {

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" index={true} element={<Home/>}/>
        <Route path="/careers" element={<Careers/>}/>
      </Routes>
    </Router>
  )
}

export default App
