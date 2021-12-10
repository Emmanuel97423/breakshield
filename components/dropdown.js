import styles from '../styles/layout/navBar.module.scss'

const dropdown = (props) => {
    return (
        <ul className={styles.container__subList__container}>
            <li className={styles.container__subList__item}>{props.item1}</li>
            <li className={styles.container__subList__item}>{props.item2}</li>
            <li className={styles.container__subList__item}>{props.item3}</li>
            <li className={styles.container__subList__item}>{props.item4}</li>
        </ul>
    )
}

export default dropdown