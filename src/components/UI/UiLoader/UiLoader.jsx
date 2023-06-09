import Loader from './img/loader.svg';

import styles from './UiLoader.module.css';

const UiLoader = () => {
    return (
        <img className={styles.loader} src={Loader} alt="Loading..." />
    )
}

export default UiLoader;