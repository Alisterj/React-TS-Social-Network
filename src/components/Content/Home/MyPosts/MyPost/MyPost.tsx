import React from 'react';
import s from './MyPost.module.css'

const MyPost = () => {
    return (
        <div className={s.add_post_wrapper}>
            <div className={s.add_post}>
                My post
                <div className={s.add_post_form}>
                    <textarea/>
                    <button>Add</button>
                </div>
            </div>
        </div>
    );
};

export default MyPost;