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
                <Navbar state={props.state.sitebar}/>

                {/*<MyPosts />*/}
                <div className='app-wrapper-content'>
                    <Routes>
                        {/*<Route path="/dialogues/*" element={<Dialogues messagesData={props.state.profilePage.messagesData} dialoguesData={props.state.profilePage.dialoguesData} />}/>*/}
                        {/*<Route path="/profile" element={<Profile postData={props.state.dialoguesPage.postData}/>}/>*/}

                        <Route path="/dialogues/*" element={<Dialogues state={props.state.dialoguesPage}/>}/>
                        <Route path="/profile" element={<Profile profilePage={props.state.profilePage}
                                                                 dispatch={props.dispatch} />}/>
                    </Routes>
                </div>

            </div>

        </BrowserRouter>);
}


export default App;
