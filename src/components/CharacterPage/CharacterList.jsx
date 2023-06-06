import styles from '../../components/CharacterPage/CharacterList.module.css'

const CharacterList = ({ character } ) => {

    return (
        <ul className={styles.list__container}>
            {character.map(({name, image, id}) => {
                return <li className={styles.list__item} key={id}>
                    <a href='#'>
                        <img className={styles.character__img} src={image} alt={name} />
                        <p>{name}</p>
                    </a>
                </li>
            })}
        </ul>
    )
}

export default CharacterList;