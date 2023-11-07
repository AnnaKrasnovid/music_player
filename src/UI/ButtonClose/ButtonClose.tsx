import { ReactNode } from 'react';

import './ButtonClose.scss';

interface ButtonCloseInt {  
    closeModal: () => void,
}

function ButtonClose({ closeModal = () => { } }: ButtonCloseInt) {
    return (
        <button className='button-close' onClick={closeModal}>
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 18L12 10L20 2L18 0L10 8L2 0L0 2L8 10L0 18L2 20L10 12L18 20L20 18Z" fill="#fff" />
            </svg>
        </button>
    );
}

export default ButtonClose;