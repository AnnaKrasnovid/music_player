import { memo } from 'react';
import { ButtonInt } from '../../types/ComponentsInt';

import styles from './Button.module.scss';

function Button({type, callback}:ButtonInt) {
    console.log('render')
    return(
        <button
         type='button' 
         className={`${styles['button']} ${styles[`button_type_${type}`]}`}
         onClick={callback}
         >
         </button> 
    )
};

export default memo(Button);