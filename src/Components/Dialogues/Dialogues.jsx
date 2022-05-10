import React from 'react';
import s from './Dialogues.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/state";


const Dialogues = (props) => {

    let newMessage = React.createRef();

    let sendMessage = () => {
        let text = newMessage.current.value;
        alert(text);
    }

    let state = props.store.getState().dialoguesPage;


    let dialoguesElement = state.dialoguesData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElements = state.messagesData.map(m => <Message message={m.message}/>)
    let newMessageBody = state.newMessageBody;


    let onNewMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }



    return <div className={s.dialogues}>
        <div className={s.dialoguesItems}>
            {dialoguesElement}


        </div>
        <div className={s.messages}>
           <div> {messagesElements} </div>
<div>
    <div><textarea value={newMessageBody} onChange={onNewMessageChange} >  </textarea></div>
    <div><button onClick={onNewMessageClick}> send</button></div>
    
</div>

        </div>

    </div>
}

export default Dialogues;



