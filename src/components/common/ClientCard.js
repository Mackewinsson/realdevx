import React from 'react';
import { Card } from 'react-bootstrap';
import CallCheckBox from './CallCheckBox';
import SaveButton from './SaveButton';

const ClientCard = ({
  id,
  url,
  titulo,
  precio,
  titular,
  region,
  comuna,
  telefono,
  telefonoLink,
  codigo,
  descripcion,
  created_at,
  updateCount
}) => {
  return (
    <div className="col mb-4">
      <Card className="box-shadow" border="info">
        <Card.Header className="text-center">{comuna}</Card.Header>
        <Card.Body>
          <Card.Title>💰 {precio}</Card.Title>
          <Card.Text>👉 {titulo}</Card.Text>
          <Card.Text>📲 {telefono}</Card.Text>
          <Card.Text>{codigo}</Card.Text>
          <Card.Text>{titular}</Card.Text>
          <Card.Text as="div">
            <CallCheckBox />
          </Card.Text>
          <Card.Text as="div" className="mt-2">
            <textarea />
          </Card.Text>
        </Card.Body>
        <Card.Footer style={{ padding: '0px' }}>
          <SaveButton updateCount={updateCount} />
        </Card.Footer>
      </Card>
    </div>
  );
};

export default ClientCard;
