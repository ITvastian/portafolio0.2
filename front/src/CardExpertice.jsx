import React from 'react';
import { Card } from 'react-bootstrap';
import './styles/CardExpertice.css'

const CardExpertice = ({ title, description, years }) => (
  <Card>
    <Card.Body className='experticeCard'>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{description}</Card.Text>
      <Card.Text><strong>Años de experiencia:</strong> {years}</Card.Text>
    </Card.Body>
  </Card>
);

export default CardExpertice;
