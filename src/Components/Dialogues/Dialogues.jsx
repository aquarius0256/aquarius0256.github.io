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

let dialoguesData = [
    {id: 1, name: 'Artur'},
    {id: 2, name: 'Tanyuha'},
    {id: 3, name: 'Kamila'}
]

let messagesData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you', likesCount: 13},
    {id: 3, message: 'How is your it-kamasutra?', likesCount: 14}
]

const Dialogues = (props) => {
    return <div className={s.dialogues}>
        <div className={s.dialoguesItems}>
            <DialogItem name={dialoguesData[0].name} id={dialoguesData[0].id}/>
            <DialogItem name={dialoguesData[1].name} id={dialoguesData[1].id}/>
            <DialogItem name={dialoguesData[2].name} id={dialoguesData[2].id}/>


        </div>
        <div className={s.messages}>
            <Message message={messagesData[0].message}/>
            <Message message={messagesData[1].message}/>
            <Message message={messagesData[2].message}/>


        </div>
    </div>
}

export default Dialogues;



