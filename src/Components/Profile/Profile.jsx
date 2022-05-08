import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import DialogItem from "../Dialogues/DialogItem/DialogItem";


const Profile = (props) => {

debugger
    return <div>

        <ProfileInfo className={s.image} />

        <MyPosts postData={props.profilePage.postData}
                 newPostText={props.profilePage.newPostText}
                 dispatch={props.dispatch}
                 />

    </div>

}
export default Profile;