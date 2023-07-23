import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/icon/Logo.svg';
import translate from '../assets/icon/Translate.svg';
import '../styles/Header.scss';

const Header = () => {
    return (
        <div className='header'>
            <Link to='/'>
                <img className='header__logo' src={logo} alt='logo' />
            </Link>
            <ul className='header__nav'>
                <li className='header__nav-element'>
                    <NavLink to='/' end>
                        Home
                    </NavLink>
                </li>
                <li className='header__nav-element'>
                    <NavLink to='/game' end>
                        Game
                    </NavLink>
                </li>
                <li className='header__nav-element'>
                    <NavLink to='/gallery' end>
                        Gallery
                    </NavLink>
                </li>
            </ul>
            <div className='container'>
                <img className='header__translate-logo' src={translate} alt='translate_icon' />
                <p className='header__translate-text'>Ru</p>
            </div>
        </div>
    );
};

export default Header;
