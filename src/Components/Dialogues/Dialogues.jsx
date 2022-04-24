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

let dialoguesElement = dialoguesData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
//

let messagesData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you', likesCount: 13},
    {id: 3, message: 'How is your it-kamasutra bro?', likesCount: 14}
]

let messagesElements = messagesData.map(message => <Message message={message.message} />)

const Dialogues = (props) => {
    return <div className={s.dialogues}>
        <div className={s.dialoguesItems}>
            { dialoguesElement }


        </div>
        <div className={s.messages}>
            { messagesElements }


        </div>
    </div>
}

export default Dialogues;



