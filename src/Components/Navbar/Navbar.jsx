import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from "../Dialogues/DialogItem/DialogItem";


const Navbar = (props) => {

    let friendsElement = props.state.friendsData.map(friend => <DialogItem name={friend.name} id={friend.id}/>);

    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to="/profile" className={navData => navData.isActive ? s.activeLink : s.item}>Profile</NavLink>
        </div>
        <div className={`${s.item} ${s.active}`}>
            <NavLink to="/dialogues" className={navData => navData.isActive ? s.activeLink : s.item}>Messages</NavLink>
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
        <div> Friends
            {friendsElement}
        </div>
    </nav>
}
export default Navbar;