import { useTheme } from '../../../context/ThemeProvider';

import cn from 'classnames';

import styles from './CardTheme.module.css';

const CardTheme = ({theme, text, img, classes}) => {
    const isTheme = useTheme();
    return (
        <div 
            className={cn(styles.item, classes)} 
            onClick={()=>isTheme.change(theme)}
        >
            <div className={styles.item__header}>{text}</div>
            <img src={img} className={styles.item__img} alt={text} />
        </div>
    )
}

export default CardTheme;