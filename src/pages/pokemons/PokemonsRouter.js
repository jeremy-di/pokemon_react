import React from 'react';
import PokemonList from './PokemonList';
import PokemonDetails from './PokemonDetails';
import Layout from './Layout';
import { Routes, Route } from "react-router-dom";

const PokemonsRouter = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="list" element={<PokemonList />} />
                <Route path="details/:id" element={<PokemonDetails />} />
            </Route>
        </Routes>
    );
};

export default PokemonsRouter;