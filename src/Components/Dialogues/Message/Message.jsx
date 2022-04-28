import React from 'react';
import s from './../Dialogues.module.css'


const Message = (props) => {

    return <div className={s.message + ' ' + s.oval}> {props.message} </div>

    // <div className={s.message + ' ' + s.oval2}> dialog </div>
}



export default Message;



