import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export default function Contato() {
    return (
        <Container>
      <h2 className="text-center mb-4">Contato</h2>
      <Row className="justify-content-center">
        <Col md={8}>
          <Form>
            <Form.Group controlId="formBasicName">
              <Form.Label>Nome</Form.Label>
              <Form.Control type="text" placeholder="Seu Nome" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Seu Email" />
            </Form.Group>
            <Form.Group controlId="formBasicMessage">
              <Form.Label>Mensagem</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Sua Mensagem" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Enviar
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
    );
};