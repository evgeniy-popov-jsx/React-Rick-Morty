import { useDispatch } from 'react-redux';

import { setFavorite, removeFavorite} from '../../../store/actions';

import iconFavorite from './img/favorite-non-fill.svg';
import iconFavoriteFill from './img/favorite-fill.svg';

import styles from './PersonImage.module.css';

const PersonImage = (props) => {
    const dispatch = useDispatch();
    const {personImage, personName, personId, personFavorite, setPersonFavorite } = props; 

    const dispatchFavoriteCharacter = () => {
        if (personFavorite) {
            dispatch(removeFavorite(personId));
            setPersonFavorite(false);
        } else {
            dispatch(setFavorite({
                [personId]: {
                    name: personName,
                    img: personImage
                },
            }));
            setPersonFavorite(true)
        }
    };
    return (
        <>
            <div className={styles.container}>
                <img className={styles.img} src={personImage} alt={personName}/>
                <img 
                src= { personFavorite ? iconFavoriteFill : iconFavorite}
                onClick={dispatchFavoriteCharacter}
                className={styles.favorite}
                alt="Favorite" 
            />
            </div>
        </>
    )
}

export default PersonImage; 