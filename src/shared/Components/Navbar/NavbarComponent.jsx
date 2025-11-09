import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from './Navbar.module.scss';
import { useCallback } from 'react';


export const NavbarComponent=()=> {

   const scrollToSection = useCallback((id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <Navbar expand="lg"className="bg-body-tertiary">
      <Container className={styles.bg} fluid>
        <Navbar.Brand  className={styles.brand} href="#">Морская Линия</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className={styles.burgerButton} />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
           
           <Nav.Link onClick={() => scrollToSection('services')}>Услуги</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('about')}>О компании</Nav.Link>
            <NavDropdown title="Виды грузов" id="navbarScrollingDropdown">
              <NavDropdown.Item onClick={() => scrollToSection('services')} >
              Перевозка легковых и транспортных средств
              </NavDropdown.Item>
              <NavDropdown.Item  onClick={() => scrollToSection('services')}>
                Перевозка спецтехники
              </NavDropdown.Item >
              <NavDropdown.Item onClick={() => scrollToSection('services')} >
              Проектные негабаритные грузы
              </NavDropdown.Item>
              </NavDropdown>
           
              
           <Nav.Link onClick={() => scrollToSection('schedule')}>Расписание судна</Nav.Link>


          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

