import { BrowserRouter, Route, Link, Routes } from 'react-router-dom'; import './App.css';
import Trailer from './components/Trailer';
import Home from './components/Navigasi';
import Trending from './components/Trending';
import Superhero from './components/Superhero';
import Footer from './components/Footer';
// import { Container, Row, Col, Navbar } from 'react-bootstrap';

function App() {
  return (

    <div>
      <Trailer />
      <Trending />
      <Superhero />
      <Footer />
    </div>

  );
}

export default App;
