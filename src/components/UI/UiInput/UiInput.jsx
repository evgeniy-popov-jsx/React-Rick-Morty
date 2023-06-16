import styles from './UiInput.module.css';

const UiInput = ({
    value,
    handleInputChange,
    placeholder,
    classes
}) => {

    return (
        <div>
            <input 
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={(e)=> handleInputChange(e.target.value)} 
                className={styles.input}
                />
        </div>
    )
}

export default UiInput;