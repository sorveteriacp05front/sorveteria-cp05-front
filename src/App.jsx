import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Card from './components/Card'
import Home from './pages/Home'
import Contato from './pages/Contato'
import Sorvetes from './pages/Sorvetes'
import Login from './pages/Login'
import Error from './pages/Error'

const App = () => {
  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sorvetes" element={<Sorvetes />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  )
}

export default App