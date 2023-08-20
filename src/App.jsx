import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Login from "./pages/Login"
import About from "./pages/About"
import {Route,Routes} from 'react-router-dom'

const App = () => {


  return (
    <div>
    <Navbar />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/login" element={<Login />} />
    </Routes>
    </div>
  )
}

export default App