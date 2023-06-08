import { Link } from 'react-router-dom';

import styles from './CharacterNavigation.module.css';

const CharacterNavigation= (props) => {
    const { getResource, prevPage, nextPage, counterPage } = props;

    const handleChangePrev = () => getResource(prevPage);
    const handleChangeNext = () => getResource(nextPage);
    

    return (
        <div>
            <Link to={`/characters/?page=${counterPage-1}`} className={styles.link}>
                <button 
                    disabled={!prevPage}
                    onClick={handleChangePrev} 
                    className={styles.buttons}
                >
                    Previous
                </button>
            </Link>
            <Link to={`/characters/?page=${counterPage+1}`} className={styles.link}>
                <button
                    disabled={!nextPage}
                    onClick={handleChangeNext}
                    className={styles.buttons}
                >
                    Next
                </button>
            </Link>
        </div>
    )
}

export default CharacterNavigation;