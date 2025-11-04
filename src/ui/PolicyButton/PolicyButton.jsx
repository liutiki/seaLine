import { useNavigate } from "react-router-dom";
import styles from './PolicyButton.module.scss';

export const PolicyButton = () =>{

   const navigate = useNavigate();

 

    const handleButtonClick = (e) => {
         e.preventDefault();
        navigate("/policy");
    };

    return(
        <>
        <button className={styles.pol} onClick={handleButtonClick} type="button" >Политика обработки персональных данных</button> 
        </>  
    )
  
}