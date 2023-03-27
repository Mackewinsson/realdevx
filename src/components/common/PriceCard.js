import React from 'react';
import { Card } from 'react-bootstrap';

const PriceCard = ({
  plan,
  price,
  description,
  perks,
  link,
  classType,
  featured
}) => {
  return (
    <Card className="box-shadow" border={featured ? 'info' : null}>
      <Card.Header className="text-center">
        <Card.Title as="h4">{plan}</Card.Title>
      </Card.Header>
      <Card.Body>
        <Card.Title as="h1" className="pricing-card-title text-center">
          {price}
          <small className="text-muted">
            {' '}
            / mes
            <br />
            <span style={{ fontSize: '12px', margin: '-20px' }}>
              cargado anualmente
            </span>
          </small>
        </Card.Title>
        <Card.Text>{description}</Card.Text>
        <ul>
          {perks.map((el, i) => (
            <li key={i}>{el}</li>
          ))}
        </ul>

        <button type="button" className={`btn btn-lg btn-block ${classType}`}>
          Empieza ahora
        </button>
      </Card.Body>
    </Card>
  );
};

export default PriceCard;
