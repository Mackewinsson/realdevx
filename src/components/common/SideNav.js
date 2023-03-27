import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Accordion } from 'react-bootstrap';

export const SideNav = ({ children }) => {
  return (
    <MainWrapper>
      <SideMenu>
        <Accordion className="w-100">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Accordion Item #1</Accordion.Header>
            <Link to="/">
              <Accordion.Body>Lorem ipsum dolor</Accordion.Body>
            </Link>
          </Accordion.Item>
        </Accordion>
      </SideMenu>
      <MainContent>{children}</MainContent>
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  display: flex;
  height: 100%;
`;

const MainContent = styled.div`
  height: 100%;
`;

const SideMenu = styled.div`
  display: flex;
  height: 100%;
  background-color: #f4f4f4;
  width: 21%;
`;
