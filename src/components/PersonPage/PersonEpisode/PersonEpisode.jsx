import { makeConcurrentRequest } from '../../../utils/network';
import { useState, useEffect } from 'react';

import styles from './PersonEpisode.module.css';

const PersonEpisode = ({personEpisode}) => {
    const [episodeName, setEpisodeName] = useState([]);

    useEffect(()=>{
        (async ()=>{
            const episode = personEpisode.map(url=>url)
            const response = await makeConcurrentRequest(episode);
            setEpisodeName(response);
        })();
    },[])

    return (
        <div className={styles.wrapper}>
            <ul className={styles.list__container}>
                {episodeName.map(({name, id})=>{
                    return <li key={id} className={styles.list__item}>
                        <span className={styles.item__episode}>Episode {id}</span>
                        <span className={styles.item__colon}>:</span>
                        <span className={styles.item__title}>{name}</span>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default PersonEpisode;