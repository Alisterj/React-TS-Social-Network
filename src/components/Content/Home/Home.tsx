import React from 'react';
import topoboi from "../../../images/rm373batch2-08.jpg";
import s from './Home.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Home = () => {
    return (
        <div className={s.content}>
            <div className={s.content_imgs}>
                <div className={s.background_img}>
                    <img src={'https://img.freepik.com/free-photo/vivid-blurred-colorful-wallpaper-background_58702-2460.jpg?t=st=1658225568~exp=1658226168~hmac=fe360f8245e6a67e090fd2565f7c823acdfbfbaba0c83e7c90531014020ff32f&w=1060'} alt=""/>
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