import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ChiSiamo from './components/ChiSiamo';
import Attivita2 from './components/Attivita2';
import Contatti from './components/Contatti';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
      <Router>
      <Header />
      <Routes>
      <Route path="/chisiamo" element={<ChiSiamo/>}/>
      <Route path="/attivita" element={<Attivita2/>}/>
      <Route path="/contatti" element={<Contatti/>}/>
      <Route path="/" element={<Home/>}/>
      </Routes>
      <Footer />
      </Router>
  );
}

export default App;
