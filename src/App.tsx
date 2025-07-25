import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Componens/Home/Home'
import About from './Componens/About/About'
import NavBar from './Componens/NavBar/NavBar'
// import Work from './Componens/Work/Work'
import Contact from './Componens/Contact/Contact'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/work" element={<Work />} /> */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
