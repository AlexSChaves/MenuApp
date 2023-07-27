import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Revisao from './pages/Revisao';
import './App.css';
import Header from './components/Header';

function App() {

  const [comidas, setComidas] = React.useState({});

  return (
    <div className="container-app">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home comidas={comidas} setComidas={setComidas} />} />
          <Route path="/revisao/:nome" element={<Revisao comidas={comidas} />} />
        </Routes>
      </BrowserRouter >
    </div>
  );
}

export default App;
