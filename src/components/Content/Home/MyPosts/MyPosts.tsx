import React from 'react';
import s from './MyPosts.module.css'
import MyPost from "./MyPost/MyPost";
import Post from "./Post/Post";
import {PostType} from "../../../../App";

type MyPostsPropsType = {
    posts: PostType[]
    addPost: (title: string) => void
}
const MyPosts = (props: MyPostsPropsType) => {
    return (
        <div className={s.myPost}>
            <MyPost addPost={props.addPost}/>
            <div className={s.posts}>
                {props.posts.map(p => {
                    return (
                        <div key={p.id}>
                            <Post postTitle={p.title}
                                  postImg={p.img}/>
                        </div>
                    )
                })}

            </div>
        </div>
    );
};

export default MyPosts;