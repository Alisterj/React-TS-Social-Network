import React from 'react';
import deer from './images/ol.webp'
import topoboi from './images/topoboi.jpg'
import './App.css';

function App() {
    return (
        <div className="app-wrapper">
            <header className={'header'}>
                <div className="header_content">
                    <img src={deer} alt=""/>
                </div>
            </header>
            <div className={'nav-and-content'}>
                <nav className={'nav'}>
                    <div>Home</div>
                    <div>Messages</div>
                    <div>News</div>
                    <div>Music</div>
                    <div>Setting</div>
                </nav>
                <div className={'content'}>
                    <div className={'content_topoboi'}>
                        <img src={topoboi} alt=""/>
                    </div>
                    <div>
                        Ava + description
                    </div>
                    <div>
                        My post
                        <div>
                            New post
                        </div>
                        <div>
                            <div>
                                Post 1
                            </div>
                            <div>
                                Post 1
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
