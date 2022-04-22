import React from 'react';
import s from './Dialogues.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={"/dialogues/" + props.id}> {props.name} </NavLink>
    </div>
}

const Message = (props) => {
    return <div className={s.message}> {props.message}</div>
}
const Dialogues = (props) => {
    return <div className={s.dialogues}>
        <div className={s.dialoguesItems}>
            <DialogItem name="Arthur" id="1"/>
            <DialogItem name="Tanyuha" id="2"/>
            <DialogItem name="Kamila" id="3"/>


        </div>
        <div className={s.messages}>
            <Message message="Hi"/>
            <Message message="How are you"/>
            <Message message="How is your it-kamasutra?"/>


        </div>
    </div>
}

export default Dialogues;



