import React from 'react';
import deep from '../../../../../images/deer.jpg'
import s from './Post.module.css'

type PostPropsType = {
    postTitle: string
    postImg: string
}

const Post = (props: PostPropsType) => {
    return (
        <div className={s.post_wrapper}>
            <div className={s.post}>
                <img src={props.postImg} alt=""/>
                <span>{props.postTitle}</span>
            </div>
        </div>
    );
};

export default Post;