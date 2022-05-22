import React from 'react';
import './App.css';
import {Header} from "./Header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import {Projects} from "./Projects/Projects";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
        </div>
    );
}

export default App;
