import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import styled from 'styled-components';

const PageLayout = ({ children }) => {
  return (
    <>
      <NavBar />
      <MainWrapper>{children}</MainWrapper>
      <Footer />
    </>
  );
};

export default PageLayout;

const MainWrapper = styled.div`
  height: 100vh;
  width: 100%;
`;
