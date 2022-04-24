import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import DialogItem from "../Dialogues/DialogItem/DialogItem";


const Profile = (props) => {
    let postData = [
        {id: 1, message: 'How are you?', likesCount: 12},
        {id: 1, message: 'It\'s my first post', likesCount: 13},
        {id: 1, message: 'How are you?', likesCount: 12}
    ]
    let postElement = postData.map(post => <MyPosts message={post.message} likesCount={post.likesCount}/>);

    return <div>

        <ProfileInfo className={s.image} />
        { postElement }
        {/*<MyPosts message=  {postData[1].message} likesCount={postData[1].likesCount}/>*/}

    </div>

}
export default Profile;