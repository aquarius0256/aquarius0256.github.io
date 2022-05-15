import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogues-reducer";
import Dialogues from "./Dialogues";


const DialoguesContainer = (props) => {

    let state = props.store.getState().dialoguesPage;


    // let newMessage = React.createRef();
    //
    // let sendMessage = () => {
    //     let text = newMessage.current.value;
    //     alert(text);
    // }




    // let dialoguesElement = state.dialoguesData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    // let messagesElements = state.messagesData.map(m => <Message message={m.message}/>)
    // let newMessageBody = state.newMessageBody;


    let onNewMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }
    let onNewMessageChange = (body) => {

        props.store.dispatch(updateNewMessageBodyCreator(body));
    }



    return <Dialogues updateNewMessageBody={onNewMessageChange} sendMessage={onNewMessageClick} state={state}/>

}

export default DialoguesContainer;



