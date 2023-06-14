import { THEME_DARK, THEME_INERT, THEME_LIGHT } from '../../../context/ThemeProvider';

import CardTheme from '../CardTheme';

import imageLight from './img/ligth.jpg'
import imageDark from './img/dark.jpg'
import imageInert from './img/inert.jpg'

import styles from './ChooseTheme.module.css';

const ChooseTheme = () => {
    const elements = [
        {
            classes: styles.item__light,
            theme: THEME_LIGHT,
            text: 'Light Theme', 
            img: imageLight
        },
        {
            classes: styles.item__dark,
            theme: THEME_DARK,
            text: 'Dark Theme', 
            img: imageDark
        },
        {
            classes: styles.item__inert,
            theme: THEME_INERT,
            text: 'Inert Theme', 
            img: imageInert
        },
    ]

    return (
        <div className={styles.container}>
            {elements.map(({ classes,theme, text, img }, index) => {
                return <CardTheme 
                    key={index}
                    classes={classes}
                    theme={theme}
                    text={text}
                    img={img}
                />
            })}
        </div>
    )
}

export default ChooseTheme;