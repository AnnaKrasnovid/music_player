import { ReactNode } from 'react';
import ButtonClose from '../../UI/ButtonClose/ButtonClose';

import styles from './SideBox.module.scss';

interface SideBoxInt {
    closeModal: () => void,
    isActive: boolean,
    children: ReactNode
}

function SideBox({ closeModal, isActive, children }: SideBoxInt) {
    return (
        <div className={`container  ${styles['collections']} ${isActive ? styles['collections_active'] : ''}`}>
            <ButtonClose closeModal={closeModal} />
            {children}
        </div>
    );
};

export default SideBox;