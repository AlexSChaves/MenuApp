import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Revisao from './pages/Revisao';
import './App.css';

function App() {

  const [comidas, setComidas] = React.useState({});

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home comidas={comidas} setComidas={setComidas} />} />
        <Route path="/revisao" element={<Revisao comidas={comidas} />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
