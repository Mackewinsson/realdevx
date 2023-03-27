import React, { useState } from 'react';
import styled from 'styled-components';

const StyledInput = styled('input')`
  /* Double-sized Checkboxes */
  -ms-transform: scale(2); /* IE */
  -moz-transform: scale(2); /* FF */
  -webkit-transform: scale(2); /* Safari and Chrome */
  -o-transform: scale(2); /* Opera */
  transform: scale(2);
  padding: 10px;
`;

const CallCheckBox = () => {
  const [called, setCalled] = useState(false);

  const handleCallCheckBox = () => {
    setCalled(!called);
  };
  return (
    <div className="form-check">
      <StyledInput
        className="form-check-input"
        type="checkbox"
        value=""
        id="flexCheckDefault"
        defaultChecked={called}
        onChange={handleCallCheckBox}
      ></StyledInput>
      <label
        className="form-check-label ml-3"
        style={{
          color: `${called ? 'black' : 'red'}`,
          fontWeight: `${called ? 'normal' : 'bold'}`
        }}
      >
        {called ? 'Contactado ✅' : 'Por contactar ⚠️'}
      </label>
    </div>
  );
};

export default CallCheckBox;
