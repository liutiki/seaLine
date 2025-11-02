
import {CallOrder} from '@/ui/BtnCallOrder/CallOrder';
import styles from './TopContacts.module.scss';
import logo from '@/Assets/logo.png';

export const TopContacts = () =>{
    return(
        <>
        <div className={styles.topcall}>
           <div className={styles.logoposition}>
          <img src={logo} className={styles.logo} alt="морские грузоперевозки"/>
          <div className={styles.log}>
          <span className={styles.seaLine}>Морская Линия</span> 
          <span className={styles.logistic}>Логистическая компания</span>  
          </div>      
          </div>
      
         
          <div className={styles.position}>
          <p className={styles.tel}>
          <a className={styles.phone} href="tel:+79212607090" title="Позвонить в отдел логистики">+7(921)260 70 90</a>
          </p>

          <p className={styles.mail}>
          <a className={styles.info} href="mailto:info@kdsc.ru" title="Написать на электронную почту">info@kdsc.ru</a>
          </p>   
          <CallOrder />
          </div>
         
    

          </div>

        </>
    )
}