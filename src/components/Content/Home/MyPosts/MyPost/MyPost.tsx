import React from 'react';
import s from './MyPost.module.css'

const MyPost = () => {
    return (
        <div className={s.add_post}>
            <span className={s.add_post_span}>My post</span>
            <div className={s.add_post_form}>
                <input className={s.add_post_form_input}/>
                <div className={s.add_post_form_btns}>
                    <button className={s.btn_add}>Add post</button>
                    <button className={s.btn_remove}>Remove</button>
                </div>
            </div>
        </div>
    );
};

export default MyPost;