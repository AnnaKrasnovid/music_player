import { ReactNode } from 'react';

import styles from './Tooltip.module.scss';

interface TooltipInt {
    children: ReactNode,
    isOpen: boolean
}

function Tooltip({ children, isOpen }: TooltipInt) {
    return (
        <div className={`${styles['tooltip']} ${isOpen ? styles['tooltip_active'] : ''} `}>
            {children}
        </div>
    )
}

export default Tooltip;