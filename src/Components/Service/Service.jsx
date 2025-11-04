import { dataService } from './dataService';
import styles from './Service.module.scss';


export const Service =() =>{
return(
     <section className={styles.position} id="services">
<div className={styles.position} id="services">
<h1 className={styles.our}>Наши услуги</h1>

<h2 className={styles.textposition}>
 Морские и контейнерные грузоперевозки <br/>между <br/>Калининградом и Санкт-Петербургом
</h2>
</div>

   <div className={styles.cardPosition}>
          {dataService.map((item=>{
          const{image, name, description}=item;
           return(
           <article className={styles.card} key={item.id}> 

           <div className={styles.imageContainer}>
           <img src={image} className={styles.image} alt="vessel"/> 
           </div>
   
    <div >
    <h3 className={styles.title}>{name}</h3>
    <p className={styles.description}>{description}</p>
    </div>
    </article>       
      )
      
    }))}
                     
    </div>

</section>




   
)

}