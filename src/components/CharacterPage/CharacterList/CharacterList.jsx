import { Link } from 'react-router-dom';

import styles from '../CharacterList/CharacterList.module.css';

const CharacterList = ({ character } ) => {

    return (
        <ul className={styles.list__container}>
            {character.map(({name, image, id}) => {
                return <li className={styles.list__item} key={id}>
                    <Link to={`/characters/${id}`}>
                        <img className={styles.character__img} src={image} alt={name} />
                        <p>{name}</p>
                    </Link>
                </li>
            })}
        </ul>
    )
}

export default CharacterList;