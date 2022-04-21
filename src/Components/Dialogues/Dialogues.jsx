import React from 'react';
import s from './Dialogues.module.css'

const Dialogues = (props) => {
    return <div className= {s.dialogues}>
        <div className={s.dialoguesItems}>
            <div className={s.dialog + ' ' + s.active}>
                Artur
            </div>
            <div className={s.dialog}>
                Tanyuha
            </div>
            <div className={s.dialog}>
                Kamila
            </div>

        </div>
        <div className={s.messages}>
            <div className={s.message}> Hi</div>
            <div className={s.message}> How are you?</div>
            <div className={s.message}> How is your it-kamasutra?</div>

        </div>
    </div>
}

export default Dialogues;



