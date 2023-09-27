import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import CategoryPage from "./pages/CategoryPage/CategoryPage";

const App = () => {
    return (<BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/category" element={<CategoryPage/>}/>
        </Routes>
    </BrowserRouter>);
};

export default App;
