import styles from './MakeOrder.module.scss';
import { ArrowUpRight } from 'lucide-react';

export const MakeOrder = () => {
    return(

        <div>
              
<button className={styles.order} >Сделать заявку    <ArrowUpRight /></button>
        </div>
    )
};