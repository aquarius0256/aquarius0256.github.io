import React from 'react';
import s from './Dialogues.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogues = (props) => {

    let newMessage = React.createRef();

    let sendMessage = () => {
        let text = newMessage.current.value;
        alert(text);
    }

let dialoguesElement = props.state.dialoguesData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);



let messagesElements = props.state.messagesData.map( m => <Message message={m.message} />)


    return <div className={s.dialogues}>
        <div className={s.dialoguesItems}>
            { dialoguesElement }


        </div>
        <div className={s.messages}>
            { messagesElements }


        </div>
        <div> <textarea ref={newMessage}>  </textarea>
            <button onClick={ sendMessage }> send </button>
        </div>
    </div>
}

export default Dialogues;



