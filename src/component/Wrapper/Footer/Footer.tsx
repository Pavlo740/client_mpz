import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import css from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={css.container}>
      <Container>
        <Row>
          <Col xs={12} md={4} className='text-center'>
            <h5 >Контакти</h5>
            <p>Email: your.email@example.com</p>
            <p>Телефон: +380687246103</p>
          </Col>          
        </Row>
        <hr />
        <Row>
          <Col className={`text-center py-3 ${css.footerText}`}>
            Copyright &copy; 2023 Виконав курсант 203 н/г: Дикий.
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
