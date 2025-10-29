import { PhoneCall, Mail } from 'lucide-react';
import styles from './Footer.module.scss';
import logo from '@/Assets/logo.png';

export const Footer = ()=>{
    return(
            <div className={styles.footerBack}>
            <hr className={styles.style}/>
            <h1 className={styles.contacts}>Контакты</h1>
         
            <h2 className={styles.line}><img src={logo} className={styles.name} alt="морские грузоперевозки"/>Морская Линия</h2> 
            
            <h3 className={styles.we}>Мы всегда на связи и готовы ответить на ваши вопросы.</h3>

                 <ul className={styles.container}>
                 <li className={styles.footertel}>
                 <a className={styles.nounderline} href="tel:+74012994989" aria-label="Позвонить в Калининградское Морское Пароходство"> <PhoneCall />+7(4012)99 49 89</a>
                 </li>
                 <li className={styles.rest}>
                 <a className={styles.nounderline} href="mailto:info@kdsc.ru" aria-label="Написать на почту"> <Mail />info@kdsc.ru</a>
                 </li>
                 <li>
                 <a href="https://t.me/kdsc39" target="_blank" rel="noopener noreferrer" aria-label="Telegram"></a>
                 </li>      
                 <li className={styles.timework}>Режим работы:</li>
                 <li className={styles.timework}>пн-пт:9:00-18:00</li>
                 </ul>
              
        </div>
    )
}