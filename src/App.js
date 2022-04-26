import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
// import MyPosts from './Components/Profile/MyPosts/MyPosts';
import Profile from './Components/Profile/Profile';
import Dialogues from "./Components/Dialogues/Dialogues";
import {BrowserRouter, Routes, Route} from "react-router-dom";

const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>

                {/*<MyPosts />*/}
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/dialogues/*" element={<Dialogues messagesData={props.messagesData} dialoguesData={props.dialoguesData} />}/>
                        <Route path="/profile" element={<Profile postData={props.postData}/>}/>

                        <Route path="/dialogues/*" element={<Dialogues/>}/>
                        <Route path="/profile" element={<Profile/>}/>
                    </Routes>
                </div>

            </div>

        </BrowserRouter>);
}


export default App;
