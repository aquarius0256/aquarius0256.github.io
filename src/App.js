import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
// import MyPosts from './Components/Profile/MyPosts/MyPosts';
import Profile from './Components/Profile/Profile';
import Dialogues from "./Components/Dialogues/Dialogues";
import {BrowserRouter, Routes, Route} from "react-router-dom";

const App = () => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>

                {/*<MyPosts />*/}
                <div className='app-wrapper-content'>
                    <Routes>
                    <Route path="/Dialogues" element={<Dialogues/>}/>
                    <Route path="/Profile" element={<Profile/>}/>
                    </Routes>
                </div>

            </div>

        </BrowserRouter>);
}


export default App;
