import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import DialogItem from "../Dialogues/DialogItem/DialogItem";


const Profile = (props) => {


    return <div>

        <ProfileInfo className={s.image} />

        <MyPosts postData={props.postData}/>

    </div>

}
export default Profile;