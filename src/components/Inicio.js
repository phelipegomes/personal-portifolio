import React from 'react';
import "./Inicio.css"
import { Container, Row, Col } from 'react-bootstrap';

export default function Inicio() {
    return (
        <>
            <Container>
            <Row className="text-center">
            <Col>
                <h1>Bem-vindo ao Meu Portfólio!</h1>
                <p>Olá! Sou Phelipe Franca, um desenvolvedor especializado em PowerBI, visualização de dados e desenvolvimento Front-End com React.</p>
            </Col>
            </Row>
            </Container>
            
        </>
    )
}