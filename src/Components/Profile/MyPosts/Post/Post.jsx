import React from 'react';
import s from './Post.module.css'
const Post = (props) => {
    return <div>

        <div className={s.item}>
            <img src={'https://www.meme-arsenal.com/memes/807f7063ae47455ef78d5a0743509576.jpg'} />
            {props.message}

        </div>
<span> likes {props.likesCount}</span>
    </div>
  

}
export default Post;