import React from 'react';
import github from '../assets/icon/GitHub Logo.svg'
import rs from '../assets/icon/RSS Logo.svg'
import '../styles/Footer.scss'
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <div className='footer'>
            <Link to='https://github.com/VasaSkor'>
                <img src={github} className='footer__icon--github' alt='github_icon'/>
            </Link>
            <p className='footer__year'>2023</p>
            <Link to='https://rs.school/js/'>
                <img src={rs} className='footer__icon--rss' alt='rs_icon'/>
            </Link>
        </div>
    );
};

export default Footer;