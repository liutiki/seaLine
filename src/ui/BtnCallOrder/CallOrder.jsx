import { useState } from 'react';
import styles from './CallOrder.module.scss';
import { PhoneOutgoing } from 'lucide-react';
import { ModalCall } from '@/shared/Components/ModalOrderCall/ModalCall';


export const CallOrder = () => {

    const [showModal, setShowModal] = useState(false);
    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    return(

        <div>
              
     <button className={styles.order} onClick={handleShow}>Заказать звонок  <PhoneOutgoing className={styles.icon}/></button>
     
     <ModalCall show={showModal} handleClose={handleClose}/>

</div>
    )
};