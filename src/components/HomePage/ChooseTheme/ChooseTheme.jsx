import { useTheme, THEME_DARK, THEME_INERT, THEME_LIGHT } from '../../../context/ThemeProvider';

import styles from './ChooseTheme.module.css';

const ChooseTheme = () => {
    const isTheme = useTheme();

    return (
        <>
            <h1>{isTheme.theme}</h1>
            <button onClick={()=> isTheme.change(THEME_LIGHT)}>Light</button>
            <button onClick={()=> isTheme.change(THEME_DARK)}>Dark</button>
            <button onClick={()=> isTheme.change(THEME_INERT)}>Inert</button>
        </>
    )
}

export default ChooseTheme;