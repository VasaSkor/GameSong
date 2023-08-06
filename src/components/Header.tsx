import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/icon/Logo.svg';
import translate from '../assets/icon/Translate.svg';
import '../styles/Header.scss';
import burgerMenuIcon from '../assets/icon/Burger_menu.svg';
import translations from '../script/translations'
import {useLanguageContext} from "./LanguageContext";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isOverlayVisible, setIsOverlayVisible] =
        useState(false);
    const [, setCurrentLanguage] =
        useState<'en' | 'ru'>('en');
    const { changeLanguage, currentLanguage } = useLanguageContext();

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
        setIsOverlayVisible(!isOverlayVisible);
    };

    const handleOverlayClick = () => {
        setIsMenuOpen(false);
        setIsOverlayVisible(false);
    };

    const toggleLanguage = () => {
        const newLanguage = currentLanguage === 'en' ? 'ru' : 'en';
        setCurrentLanguage(newLanguage);
    };

    return (
        <div className='header'>
            <Link to='/'>
                <img className='header__logo' src={logo} alt='logo' />
            </Link>
            <ul className={`header__nav ${isMenuOpen ? 'open' : ''}`}>
                <li className='header__nav-element'>
                    <NavLink to='/' end>
                        {translations[currentLanguage].home}
                    </NavLink>
                </li>
                <li className='header__nav-element'>
                    <NavLink to='/game' end>
                        {translations[currentLanguage].game}
                    </NavLink>
                </li>
                <li className='header__nav-element'>
                    <NavLink to='/gallery' end>
                        {translations[currentLanguage].gallery}
                    </NavLink>
                </li>
            </ul>
                <div className={`container ${isMenuOpen ? 'open' : ''}`}>
                    <img className='header__translate-logo
                    ' src={translate} alt='translate_icon'
                         onClick={() => {
                             changeLanguage();
                             toggleLanguage();
                         }}/>
                    <p className='header__translate-text'>{translations[currentLanguage].language}</p>
                </div>
            <img
                className='header__burger-menu-icon'
                src={burgerMenuIcon}
                alt='burger-menu-icon'
                onClick={handleMenuToggle}
            />
            {isOverlayVisible && <div className='overlay' onClick={handleOverlayClick} />}
        </div>
    );
};

export default Header;
