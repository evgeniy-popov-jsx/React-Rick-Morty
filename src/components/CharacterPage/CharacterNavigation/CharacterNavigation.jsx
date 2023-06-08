import { Link } from 'react-router-dom';

import UiButton from '../../UI/UiButton';

import styles from './CharacterNavigation.module.css';

const CharacterNavigation= (props) => {
    const { getResource, prevPage, nextPage, counterPage } = props;

    const handleChangePrev = () => getResource(prevPage);
    const handleChangeNext = () => getResource(nextPage);
    

    return (
        <div className={styles.container}>
            <Link to={`/characters/?page=${counterPage-1}`} className={styles.buttons}>
                <UiButton 
                    text='Previous'
                    onClick={handleChangePrev}
                    disabled={!prevPage}
                />
            </Link>
            <Link to={`/characters/?page=${counterPage+1}`} className={styles.buttons}>
                <UiButton 
                    text='Next'
                    disabled={!nextPage}
                    onClick={handleChangeNext}
                />
            </Link>
        </div>
    )
}

export default CharacterNavigation;