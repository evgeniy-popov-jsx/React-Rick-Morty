import { useLocation } from "react-router-dom";

import img from "./img/NotFoundImage.png"
import styles from './NotFoundPage.module.css';

const NotFoundPage = () => {
    let location = useLocation();

    return (
        <div className={styles.container}>
            <img className={styles.img} src={img} alt="Not-found" />
            <p className={styles.text}> No match for <u>{location.pathname}</u> </p>
        </div>
    )
}

export default NotFoundPage;