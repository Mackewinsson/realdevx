import React from 'react';
import { Row } from 'react-bootstrap';
import { data } from '../../utils/data';
import ClientCard from '../common/ClientCard';

const ClientCardContainer = ({ updateCount }) => {
  const cards = data.map((el) => (
    <ClientCard
      id={el._id}
      url={el.url}
      titulo={el.titulo}
      precio={el.precio}
      titular={el.titular}
      region={el.region}
      comuna={el.comuna}
      telefono={el.telefono}
      telefonoLink={el.telefonoLink}
      codigo={el.codigo}
      descripcion={el.descripcion}
      created_at={el.created_at}
      key={el.codigo}
      updateCount={updateCount}
    />
  ));
  return (
    <Row as="div" className="row-cols-1 row-cols-md-3">
      {cards}
    </Row>
  );
};

export default ClientCardContainer;
