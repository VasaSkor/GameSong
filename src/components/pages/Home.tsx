import React from 'react';
import '../../styles/Home.scss'
import {NavLink} from "react-router-dom";
import { useLanguageContext } from '../LanguageContext'
import translations from '../../script/translations'

const Home = () => {
    const { currentLanguage } = useLanguageContext();
    const { title, start } = translations[currentLanguage];

    return (
        <div className='home'>
            <h1 className='home__text'>{title}</h1>
            <NavLink className='home__link' to='/game' end>
                {start}
            </NavLink>
        </div>
    );
};

export default Home;
