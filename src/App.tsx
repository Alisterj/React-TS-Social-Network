import React, {useReducer} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Home from "./components/Content/Home/Home";
import {v1} from "uuid";
import {addPostAC, PostsReducer} from "./reducer/PostsReducer";
import Dialogs from "./components/Content/Dialogs/Dialogs";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Setting from "./components/Setting/Setting";

export type PostType = {
    id: string
    title: string
    img: string
}

function App() {
    const [posts, postsDispatch] = useReducer(PostsReducer, [
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
    ])
    const addPost = (title: string) => {
        postsDispatch(addPostAC(title))
    }
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <div className={'nav-and-content'}>
                    <div className="friend_list">
                        <span>friend_list</span>
                    </div>
                    <div className="content">
                        <Routes>
                            <Route path={'/home'} element={<Home posts={posts}
                                                                addPost={addPost}/>}/>
                            <Route path={'/dialog'} element={<Dialogs/>}/>
                            <Route path={'/news'} element={<News/>}/>
                            <Route path={'/music'} element={<Music/>}/>
                            <Route path={'/setting'} element={<Setting/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
