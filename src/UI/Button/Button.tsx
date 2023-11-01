import styles from './Button.module.scss';

interface ButtonInt {
    type: 'prev'| 'play'| 'next', 
    callback: ()=> void
}

function Button({type, callback}:ButtonInt) {
    return(
        <button
         type='button' 
         className={`${styles['button']} ${styles[`button_type_${type}`]}`}
         onClick={callback}
         >
         </button> 
    )
};

export default Button;