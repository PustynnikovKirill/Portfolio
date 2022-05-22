import React from 'react';
import './App.css';
import {Header} from "./Header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import {Projects} from "./Projects/Projects";
import {Contacts} from "./contacts/Contacts";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Contacts/>
        </div>
    );
}

export default App;
