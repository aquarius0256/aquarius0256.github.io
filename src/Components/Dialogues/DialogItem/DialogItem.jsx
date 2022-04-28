import React from 'react';
import s from './../Dialogues.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return <div className= {s.dialog + ' ' + s.active}>
        <img src='https://www.meme-arsenal.com/memes/807f7063ae47455ef78d5a0743509576.jpg' />
        <NavLink to={"/dialogues/" + props.id}> {props.name} </NavLink>
    </div>
}




export default DialogItem;



