import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import icon from './img/favorite.svg';

import styles from './Favorite.module.css';

const Favorite = () => {
    const [counter, setCounter] = useState(0);
    const store = useSelector(state => state.favoriteReducer);
  
    useEffect(()=>{

        const length = Object.keys(store).length;
        length.toString().length > 2 ? setCounter('...') : setCounter(length);
        
    }, [ store ]);

    return (
        <div className={styles.container}>
            <span className={styles.counter}>{counter}</span>
            <Link to="/favorites">
                <img src={icon} className={styles.icon} alt="favoriteIcon" />
            </Link>
        </div>
    )
}

export default Favorite;