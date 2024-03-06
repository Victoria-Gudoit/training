import React from 'react';
import cl from './MyModal.module.css'

export const MyModal = ({children}) => {
    return <div className={[cl.myModal, cl.active].join(' ')}>
        <div className={cl.myModalContent}>
{children}
        </div>
    </div>;
}

