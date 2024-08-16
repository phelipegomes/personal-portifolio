import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function Curriculo() {
    return (
        <Container>
        <h2 className="text-center mb-4">Currículo</h2>
        <Row className="justify-content-center">
          <Col md={8}>
            <p>Resumo do seu currículo, destacando suas habilidades, experiências e educação.</p>
            <Button variant="primary" href="seu-curriculo.pdf" target="_blank">Baixar Currículo</Button>
          </Col>
        </Row>
      </Container> 
    );
};