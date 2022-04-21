import React from 'react';
import s from './Dialogues.module.css'
import {NavLink} from "react-router-dom";

const Dialogues = (props) => {
    return <div className= {s.dialogues}>
        <div className={s.dialoguesItems}>
            <div className={s.dialog + ' ' + s.active}>
               <NavLink to="/dialogues/1"> Artur </NavLink>
            </div>
            <div className={s.dialog}>
                <NavLink to="/dialogues/2"> Tanyuha </NavLink>
            </div>
            <div className={s.dialog}>
                <NavLink to="/dialogues/3"> Kamila </NavLink>
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



