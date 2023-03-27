import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';

const CardFooterStyled = styled(Button)`
  width: 100%;
  border-radius: 0px 0px 0.25rem 0.25rem;
  padding-top: 15px;
  padding-bottom: 15px;
`;
const SaveButton = ({ updateCount }) => {
  const [save, setSave] = useState(false);
  //   const [guardados, setGuardados] = useState([]);

  const buttonHandler = (e) => {
    save ? setSave(false) : setSave(true);
    e.target.disabled = true;
    //
    // setGuardados([
    //   ...guardados,
    //   {
    //     boton: e.target
    //   }
    // ]);
    updateCount();
  };

  return (
    <CardFooterStyled
      className={`btn btn-block ${!save ? 'btn-light' : 'btn-info'}`}
      onClick={buttonHandler}
      disabled={save ? true : false}
    >
      <strong>{save ? 'Guardado ✅' : 'Guardar 🗄'}</strong>
    </CardFooterStyled>
  );
};

export default SaveButton;
