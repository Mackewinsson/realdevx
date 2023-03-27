import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  width: 100%;
  display: flex;
  background-color: #f8f9fa;
  text-align: center;
  height: 100px;
  align-items: center;
  justify-content: center;
`;

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <StyledFooter>
      <div>
        <span>By Mackewinsson P.</span>
        <br />
        <small className="text-muted">
          Todos los derechos reservados {year}
        </small>
      </div>
    </StyledFooter>
  );
};

export default Footer;
