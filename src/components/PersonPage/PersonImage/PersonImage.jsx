import styles from './PersonImage.module.css';

const PersonImage = ({personImage, personName}) => {
    return (
        <>
            <div className={styles.container}>
                <img className={styles.img} src={personImage} alt={personName}/>
            </div>
        </>
    )
}

export default PersonImage;