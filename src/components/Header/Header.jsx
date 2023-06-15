import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { useTheme, THEME_DARK, THEME_INERT, THEME_LIGHT } from '../../context/ThemeProvider';
 
import Favorite from '../Favorite';
import imgLight from './img/light.png';
import imgDark from './img/dark.png';
import imgInert from './img/inert.png';

import styles from './Header.module.css';

const Header = () => {
    const [ icon, setIcon ] = useState(imgLight);
    
    const isTheme = useTheme();

    useEffect(()=>{
        switch (isTheme.theme) {
            case THEME_DARK: setIcon(imgDark)
                break;
            case THEME_LIGHT: setIcon(imgLight)
                break;
            case THEME_INERT: setIcon(imgInert)
                break;
            default: setIcon(imgLight);
        }
    }, [isTheme]);
    
    return (
        <div className={styles.container}>
            <div className={styles.container__logo}>
                <img src={icon} className={styles.logo} alt="icon" />
            </div>
            <ul className={styles.list__container}>
                <li><NavLink to="/" exact="true">Home</NavLink></li>
                <li><NavLink to="/characters?page=1">Characters</NavLink></li>
                <li><NavLink to="/search">Search</NavLink></li>
                <li><NavLink to="/not-found" exact="true">Not found</NavLink></li>
            </ul>   
            <Favorite />
        </div>
    )
}

export default Header;


