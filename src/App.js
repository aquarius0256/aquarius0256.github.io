import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
// import MyPosts from './Components/Profile/MyPosts/MyPosts';
import Profile from './Components/Profile/Profile';

const App = () => {

  return (
    <div className= 'app-wrapper'>
     <Header />
      <Navbar />
        <Profile />
      {/*<MyPosts />*/}
    </div>);
}


export default App;
