import React from 'react';
import '../../styles/Home.scss'
import {NavLink} from "react-router-dom";

const Home = () => {
    return(
        <div className='home'>
            <h1 className='home__text'>GAME SOUND QUIZ</h1>
            <NavLink className='home__link' to='/game' end>
                Start
            </NavLink>
        </div>
    )
};

export default Home;
