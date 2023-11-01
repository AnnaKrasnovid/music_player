import styles from './Input.module.scss';

function Input () {
    return(
        <input type='range' className={styles['input-range']}/>
    )
}


export default Input;