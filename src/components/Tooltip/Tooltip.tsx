import { ReactNode } from 'react';

import styles from './Tooltip.module.scss';

interface TooltipInt {
    children: ReactNode,
    isOpen: boolean,
    refElement?: any
}

function Tooltip({ children, isOpen, refElement }: TooltipInt) {
    return (
        <div
            ref={refElement}
            className={`${styles['tooltip']} ${isOpen ? styles['tooltip_active'] : ''} `}
        >
            {children}
        </div>
    )
}

export default Tooltip;