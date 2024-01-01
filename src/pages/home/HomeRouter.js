import React from 'react';
import Layout from './Layout';
import Home from './Home';
import { Routes, Route } from "react-router-dom";

const HomeRouter = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
            </Route>
        </Routes>
    );
};

export default HomeRouter;