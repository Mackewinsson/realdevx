import React from 'react';
import { Button } from 'react-bootstrap';

const CountButton = ({ count }) => {
  return (
    <Button type="button" className="btn btn-info">
      Guardados <span className="badge badge-light">{count}</span>
      <span className="sr-only">clientes guardados</span>
    </Button>
  );
};

export default CountButton;
