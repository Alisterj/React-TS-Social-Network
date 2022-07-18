import React from 'react';
import s from './MyPosts.module.css'
import MyPost from "./MyPost/MyPost";
import Post from "./Post/Post";
import {v1} from "uuid";

type PostType = {
    id: string
    title: string
    img: string
}

const MyPosts = () => {
    let post: PostType[] = [
        {
            id: v1(),
            title: 'First post',
            img: 'https://otvet.imgsmail.ru/download/97409679_efc2478d35c55844a54860ef30d34117_800.jpg'
        },
        {
            id: v1(),
            title: 'Two post',
            img: 'https://sun6-20.userapi.com/s/v1/ig1/xWx_Q-8kOI0miPxxanMJJSZhI39SCB6M4dreNM2-Pfcoz1go96qQYtR7LRcEojgLAvur-bvf.jpg?size=1046x1080&quality=96&crop=1,0,1046,1080&ava=1'
        },
        {
            id: v1(),
            title: 'Three post',
            img: 'https://sun6-21.userapi.com/s/v1/if1/uIOOTDpJEVJSUjomaC2M2BmtCg74TCrqYx2KR9s-Pdq99JOigzrfCHRQaV4ZWqG7Syqf-FMd.jpg?size=2160x2160&quality=96&crop=0,0,2160,2160&ava=1'
        },
    ]
    return (
        <div className={s.myPost}>
            <MyPost/>
            <div className={s.posts}>
                {post.map(p => {
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