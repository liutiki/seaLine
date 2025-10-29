import { Modal, Button } from 'react-bootstrap';
import styles from './ModalCall.module.scss'; 

export const ModalCall = ({ show, handleClose }) => {
    return (
        <Modal className={styles.modal} show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Наш менеджер свяжется с вами в ближайшее время</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className={styles.formcarryContainer}>
                    <form action="https://formcarry.com/s/leQX_lit6ht" method="POST" enctype="multipart/form-data">
                        <div>
                            <h5>Название компании:</h5>
                            <input type="text" name="company" placeholder="Введите название компании" required />
                        </div>
                        <div>
                        </div>
                        <div>
                            <h5>Имя:</h5>
                            <input type="text" name="firstName" placeholder="Введите ваше имя" required />
                        </div>
                        <div>
                            <h5>Телефон:</h5>
                            <input type="tel" name="phone" placeholder="Введите ваш телефон" required />
                        </div>
                        <Modal.Footer>
                            <Button variant="primary" type="submit">
                                Отправить
                            </Button>
                            
                        </Modal.Footer>
                    </form>
                </div>
            </Modal.Body>
        </Modal>
    );
};


