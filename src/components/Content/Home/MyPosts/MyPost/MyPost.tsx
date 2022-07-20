import React from 'react';
import s from './MyPost.module.css'
import AddItemForm from "../../../../AllForms/AddItemForm/AddItemForm";

type MyPostPropsType = {
    addPost: (title: string) => void
}

const MyPost = (props: MyPostPropsType) => {
    return (
        <div className={s.add_post}>
            <span className={s.add_post_span}>My post</span>
            <div className={s.add_post_form}>
                <AddItemForm callback={props.addPost}/>
            </div>
        </div>
    );
};

export default MyPost;