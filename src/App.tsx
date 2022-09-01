import React, {useEffect} from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import './index.css';
import Details from "./pages/Details";
import Header from "./components/Header";

function App() {

    return (
        <>
            <Header/>
            <main>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/details/:id'} element={<Details/>}/>
                </Routes>
            </main>
        </>
    );
}

export default App;
