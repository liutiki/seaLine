import {CallOrder} from '@/ui/BtnCallOrder/CallOrder';
import styles from './TopContacts.module.scss';
import logo from '@/Assets/logo.png';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const TopContacts = () =>{

 const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


    return(
        <>
          <header className={`${styles.mynav} ${scrolled ? styles.scrolled : ''} ${styles.fixedtop}`}>
        <div className={styles.topcall}>
           <Link to="/" title="Главная страница" className={styles.link}>
           <div className={styles.logoposition}>
          <img src={logo} className={styles.logo} alt="морские грузоперевозки"/>
          <div className={styles.log}>
          <span className={styles.seaLine}>Морская Линия</span> 
          <span className={styles.logistic}>Логистическая компания</span>  
          </div>      
          </div>
      </Link>
         
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
</header>
        </>
      
    )
}