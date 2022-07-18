import React from 'react';
import topoboi from "../../../images/rm373batch2-08.jpg";
import s from './Home.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Home = () => {
    return (
        <div className={s.content}>
            <div className={s.content_topoboi}>
                <img src={topoboi} alt=""/>
            </div>
            <div>
                Ava + description
            </div>
            <MyPosts/>
        </div>
    );
};

export default Home;