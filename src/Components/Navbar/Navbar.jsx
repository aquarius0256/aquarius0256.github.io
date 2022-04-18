import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

// let s = {

// }
// let c1 = "item";
// let c2 = "active";
// let classes = c1 + " " + c2;
// let classesNew = {`${s.item} ${s.active}`}

const Navbar = () => {
    return <nav className={s.nav}>
    <div className={s.item}>
      <NavLink to="/profile" className = { navData => navData.isActive ? s.activeLink : s.item }>Profile</NavLink>
    </div>
    <div className={`${s.item} ${s.active}`}>
      <NavLink to="/dialogues" className = { navData => navData.isActive ? s.activeLink : s.item }>Messages</NavLink>
    </div>
    <div className={s.item}>
      <a>News</a>
    </div>
    <div className={s.item}>
      <a>Music</a>
    </div>
    <div className={s.item}>
      <a>Settings</a>
    </div>
  </nav>
}
export default Navbar;