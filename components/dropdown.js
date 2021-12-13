import styles from '../styles/layout/navBar.module.scss';
import Link from 'next/link';

const gid = "warzone"

const dropdown = (props) => {
    return (
        <ul className={styles.container__subList__container}>
            <li className={styles.container__subList__item}><Link href={`/games/${gid}`}><a>{props.item1}</a></Link></li>
            <li className={styles.container__subList__item}>{props.item2}</li>
            <li className={styles.container__subList__item}>{props.item3}</li>
            <li className={styles.container__subList__item}>{props.item4}</li>
        </ul>
    )
}

export default dropdown