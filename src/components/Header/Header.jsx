import { NavLink } from 'react-router-dom';
 
import Favorite from '../Favorite';

import styles from './Header.module.css';

const Header = () => {
    return (
        <div className={styles.container}>
            <ul className={styles.list__container}>
                <li><NavLink to="/" exact="true">Home</NavLink></li>
                <li><NavLink to="/characters?page=1">Characters</NavLink></li>
                <li><NavLink to="/not-found" exact="true">Not found</NavLink></li>
            </ul>   
            <Favorite />
        </div>
    )
}

export default Header;


