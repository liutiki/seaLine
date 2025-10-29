import styles from './Vessel.module.scss';


const ExampleCarouselImage = ({ src, text }) => {
  return (
    <div className={styles.imageContainer}>
      <img src={src} alt={text} className={styles.vessel} />
    </div>
  );
};

export default ExampleCarouselImage;
