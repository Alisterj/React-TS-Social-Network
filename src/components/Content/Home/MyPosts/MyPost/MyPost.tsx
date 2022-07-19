import React from 'react';
import s from './MyPost.module.css'

const MyPost = () => {
    return (
        <div className={s.add_post_wrapper}>
            <div className={s.add_post}>
                My post
                <div className={s.add_post_form}>
                    <input/>
                    <button className={s.newPost_btn}>Add post</button>
                    <button className={s.newPost_btn}>Remove</button>
                </div>
            </div>
        </div>
    );
};

export default MyPost;