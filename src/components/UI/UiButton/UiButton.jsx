
import '../index.css'
import cn from 'classnames';
import styles from './UiButton.module.css';

const UiButton = ({
    text, 
    onClick, 
    disabled,
    theme='dark',
    classes
}) => {
    return (
        <button 
            disabled={disabled}
            onClick={onClick} 
            className={cn(styles.button, styles[theme], classes)}
        >
            {text}
        </button>
    )
}

export default UiButton;