import React from 'react';
import s from './Home.module.css'
import MyPosts from "./MyPosts/MyPosts";
import {PostType} from "../../../App";

type HomePropsType = {
    posts: PostType[]
}

const Home = () => {
    return (
        <div className={s.content}>
            <div className={s.content_imgs}>
                <div className={s.background_img}>
                    <img src={'https://img.freepik.com/free-vector/abstract-sale-busioness-background-banner-design-multipurpose_1340-16813.jpg?t=st=1658254594~exp=1658255194~hmac=641193eba92bdf31c4ccd34fa7d3bc09d9710ad3a8bde0df68bb6ec853402882&w=1380'} alt=""/>
                </div>
                <div className={s.img_person}>
                    <img src="https://pixelbox.ru/wp-content/uploads/2021/08/avatars-genshin-impact-80-1068x1068.jpg" alt=""/>
                </div>

            </div>
            <div className={s.aboutMe}>
                Кагальницкая Дарья
            </div>
            <MyPosts/>
        </div>
    );
};

export default Home;