import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {


let postElements = props.postData.map( p => <Post message={p.message} likesCount={p.likesCount} />)

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
            { postElements }

        </div>
    </div>


}
export default MyPosts;