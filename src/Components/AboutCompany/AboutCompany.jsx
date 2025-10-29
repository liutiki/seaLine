import photoOne from '@/Assets/AboutCompany/seaLineOne.jpg';
import photoTwo from '@/Assets/AboutCompany/seaLineTwo.jpg';
import photoThree from '@/Assets/AboutCompany/seaLineThree.jpg';
import photoFour from '@/Assets/AboutCompany/seaLineFour.jpg';
import styles from './AboutCompany.module.scss';

export const AboutCompany =()=>{


    return (
        <>
        <div className={styles.about} id="about">
  <div className={styles.company}>
  <h1 className={styles.about}>О компании</h1>
  <p className={styles.text}>Компания <span className={styles.line}>"Морская Линия"</span> специализируется на морских и контейнерных грузоперевозках.
   Мы обеспечиваем надёжную и своевременную доставку грузов из Санкт-Петербурга в Калининград.
   Наша миссия — предоставлять высококачественные услуги, соответствующие международным стандартам.
   Мы ценим профессионализм, ответственность и клиентоориентированность.</p>
  </div>
           

<div className={styles.way} >
<div className={styles.position}>
  <img className={styles.pics} src={photoOne} alt="Морские грузоперевозки"/>
  <img className={styles.pics} src={photoTwo} alt="Морские грузоперевозки"/>  
</div>

<div className={styles.position}>
  <img className={styles.pics} src={photoThree} alt="Морские грузоперевозки"/>
  <img className={styles.pics} src={photoFour} alt="Морские грузоперевозки"/>  
</div>
</div>
</div>


        </>
    )
}