import { Modal, Button } from 'react-bootstrap';
import styles from './ModalMakeOrder.module.scss'; 
import { useState } from 'react';
import { PolicyButton } from '@/ui/PolicyButton/PolicyButton';

export const ModalMakeOrder = ({ show, handleClose }) => {

     const [isChecked, setIsChecked] = useState(false);
    const [errors, setErrors] = useState({});

        const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isChecked) {
            setErrors({ checkbox: 'Необходимо согласие на обработку данных' });
            return;
        }

       
        e.target.submit(); 
    };

    return (
        <Modal className={styles.modal} show={show} onHide={handleClose}>
            <Modal.Header closeButton >
                <Modal.Title className={styles.modalOurManager} >Напишите ваш запрос и наш менеджер свяжется с вами в ближайшее время</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className={styles.formcarryContainer}>
                    <form action="https://formcarry.com/s/leQX_lit6ht" method="POST" enctype="multipart/form-data">
                        <div>
                            <h5>Название компании:</h5>
                            <input  className={styles.text} type="text" name="company" placeholder="Введите название компании" required />
                        </div>
                        <div>
                        </div>
                        <div>
                            <h5>Имя:</h5>
                            <input  className={styles.text} type="text" name="firstName" placeholder="Введите ваше имя" required />
                        </div>
                        <div>
                            <h5>Телефон:</h5>
                            <input className={styles.tel} type="tel" name="phone" placeholder="Введите ваш телефон" required />
                        </div>
                        <div>
                            <h5>Сообщение:</h5>
                            <textarea className={styles.textarea} name="message" placeholder="Введите текст сообщения" required></textarea>
                        </div>
                      <div className="form-check">
    <input
        className="form-check-input"
        type="checkbox"
        id="flexCheckDefault"
        checked={isChecked}
        onChange={handleCheckboxChange}
    />
    <label className="form-check-label" htmlFor="flexCheckDefault">
        Я согласен на обработку персональных данных
    </label>
    {errors.checkbox && <span className="text-danger">{errors.checkbox}</span>}
    <PolicyButton />
</div>
                        <Modal.Footer>
                            <Button className={styles.btn} type="submit" disabled={!isChecked}>
                                Отправить
                            </Button>
                              
                        </Modal.Footer>
                    </form>
                    
                </div>
            </Modal.Body>
        </Modal>
       
    );
};

