import styles from './ErrorMessage.module.css';

const ErrorMessage= () => {
    return (
        <>
            <p className={styles.text}>
                Послушай, Морти, я не хочу тебя расстраивать,
                но кажеться данные не загрузились — это просто какая-то ошибка.
                Поначалу тебе будет больно, Морти, но потом она медленно слабеет,
                оставляя тебя с потерянным временем и чувством вины. 
                Так было у меня, так будет у твоих родителей.
                Разорви порочный круг, Морти, будь выше этого, займись наукой.
            </p>
        </>
    )
}

export default ErrorMessage;