import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

export default function Projetos() {
    const projects = [
    {
        title: "Projeto 1",
        description: "Descrição do Projeto 1",
        imageUrl: "projeto1.jpg"
    },
    {
        title: "Projeto 2",
        description: "Descrição do Projeto 2",
        imageUrl: "projeto2.jpg"
    },
    {
        title: "Projeto 3",
        description: "Descrição do Projeto 3",
        imageUrl: "projeto3.jpg"
    }];
    return (
        <Container>
          <h2 className="text-center mb-4">Projetos</h2>
          <Row>
            {projects.map((project, index) => (
              <Col md={4} key={index} className="mb-4">
                <Card>
                  <Card.Img variant="top" src={project.imageUrl} />
                  <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>{project.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
    );
};