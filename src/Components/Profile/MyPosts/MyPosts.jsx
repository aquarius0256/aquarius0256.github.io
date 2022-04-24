import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    // let postData = [
    //     {id: 1, message: 'How are you?', likesCount: 12},
    //     {id: 1, message: 'It\'s my first post', likesCount: 13},
    //     {id: 1, message: 'How are you?', likesCount: 12}
    // ]


    return <div className={s.posts.Block}>
       <h3>my posts</h3>
        <div>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>

        </div>
        <div className={s.posts}>
            <Post message={props.message} likesCount={props.likesCount}/>
            {/*<Post message={postData[1].message} likesCount={postData[1].likesCount}/>*/}
        </div>
    </div>


}
export default MyPosts;