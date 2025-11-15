import vesOne from '@/Assets/Zelenogradsk/VesOne.jpg';
import vesTwo from '@/Assets/Zelenogradsk/VesTwo.jpg';
import vesThree from '@/Assets/Zelenogradsk/VesThree.jpg';
import vesFour from '@/Assets/Zelenogradsk/VesFour.jpg';
import styles from './VesselZel.module.scss';
import { ArrowDownRight } from 'lucide-react';


export const VesselZel = () =>{
    return (
        <>
<div className={styles.textPosition}>
  <ArrowDownRight />
  <h3 className={styles.text}><span className={styles.year}>В 2023</span> году компания приобрела универсальный сухогруз ледового класса А1, названный <span className={styles.year}>«Зеленоградск»</span> , 
      с грузоподъемностью 3958 тонн. Это позволяет доставлять в регион от 8 до 12 тысяч тонн грузов в месяц.</h3>  
</div>
        
<div className={styles.vesselPosition}>
<div>
      <img src={vesTwo} className={styles.vesTwo} width="500px"alt="Морское судно Зеленоградск"/>
</div>
          

<div className={styles.finder}>
<img className={styles.vesselOne} src={vesOne} width="500px"alt="Морское судно Зеленоградск"/>
<img className={styles.vesselThree} src={vesThree} width="500px"alt="Морское судно Зеленоградск"/>
<img className={styles.vesselFour} src={vesFour} width="500px"alt="Морское судно Зеленоградск"/>
</div>
</div>
        </>
    )
}