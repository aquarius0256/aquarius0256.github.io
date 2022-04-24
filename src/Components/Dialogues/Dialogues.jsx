import React from 'react';
import s from './Dialogues.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogues = (props) => {

let dialoguesData = [
    {id: 1, name: 'Artur'},
    {id: 2, name: 'Tanyuha'},
    {id: 3, name: 'Kamila'}
]

let dialoguesElement = dialoguesData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);


let messagesData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you', likesCount: 13},
    {id: 3, message: 'How is your it-kamasutra bro?', likesCount: 14}
]

let messagesElements = messagesData.map(message => <Message m={props.messagesData} />)


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



