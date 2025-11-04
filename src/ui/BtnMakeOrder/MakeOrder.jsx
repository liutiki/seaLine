import { useState } from 'react';
import styles from './MakeOrder.module.scss';
import { ArrowUpRight } from 'lucide-react';
import { ModalMakeOrder } from '@/shared/Components/ModalMakeOrder/ModalMakeOrder';


export const MakeOrder = () => {

     const [showModal, setShowModal] = useState(false);
        const handleShow = () => setShowModal(true);
        const handleClose = () => setShowModal(false);
    
    return(

        <div>
              
<button className={styles.order} onClick={handleShow} >Сделать заявку    <ArrowUpRight /></button>

     <ModalMakeOrder show={showModal} handleClose={handleClose}/>
        </div>
    )
};