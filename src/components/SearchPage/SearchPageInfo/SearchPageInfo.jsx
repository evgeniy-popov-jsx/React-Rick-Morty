import { Link } from 'react-router-dom';
import UiLoader from '../../UI/UiLoader';

import styles from './SearchPageInfo.module.css';

const SearchPageInfo = ({ characters }) => {
    return (
        <>
            { characters.length
                ?  (
                    <ul className={styles.list__container}>
                        {characters.map(({ id, name, image })=>{
                            return (
                                <li className={styles.list__item} key={id}>
                                    <Link to={`/characters/${id}`} >
                                        <img className={styles.person__photo} src={image} alt={name} />
                                        <p className={styles.person__name}>{name}</p>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                )
                : <UiLoader />
            }
        </>
    )
}

export default SearchPageInfo;