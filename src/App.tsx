import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Content/Home/Home";

function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <div className={'nav-and-content'}>
                <Navbar/>
                <Home/>
            </div>
        </div>
    );
}

export default App;
