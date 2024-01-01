import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeRouter from './pages/home/HomeRouter';
import PokemonsRouter from './pages/pokemons/PokemonsRouter';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<HomeRouter />} />
        <Route path="/pokemon/*" element={<PokemonsRouter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
