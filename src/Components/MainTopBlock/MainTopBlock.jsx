import vessel from '@/Assets/vessel.jpg';
import styles from './MainTopBlock.module.scss';
import { MakeOrder } from '@/ui/BtnMakeOrder/MakeOrder';

export const MainTopBlock = () =>{
    return(
    <>
 
      <img className={styles.vessel} src={vessel} alt="мосркие грузоперевозки"/>
      <div className={styles.Ship}>
      <h1 className={styles.seaShip}>Морские и контейнерные грузоперевозки</h1>
      <h2 className={styles.deliver}>Доставим ваш груз из Санкт-Петербурга в Калининград</h2>
      <MakeOrder />
      </div>
     
    </>

    )

}