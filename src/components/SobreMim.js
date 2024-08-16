import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

export default function SobreMim() {
    return (
        <>
        <Container>
        <Row className="align-items-center">
            <Col md={4}>
            <Image style={{height: 200}}src="/images/foto-perfil.jpeg" roundedCircle fluid />
            </Col>
            <Col md={8}>
            <br/>
            <h2>Sobre Mim</h2>
            <p>Tenho 28 anos e sou apaixonado por programação e análise de dados, com experiência programando em React, JavaScript e python. Participei de projetos que envolveram a visualização de dados computados na Azure Cloud consumindo a API do Graph. Tenho habilidade em extrair insights visuais a partir de diversos conjuntos de dados usando PowerBI.</p>
            </Col>
        </Row>
        </Container>
        </>
    )

}