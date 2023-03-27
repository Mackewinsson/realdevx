import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { SvgHome } from '../svg/SvgHome';
import { HomeLoggedIn } from './HomeLoggedIn';

const NotLoggedIn = () => {
  return (
    <>
      <Row>
        <Col className="d-flex justify-content-center">
          <SvgHome />
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="text-center p-5">
            <h1 className="mt-4">Wiseass</h1>
            <p>Si puedes cruzar el darien, puedes con esto</p>
          </div>
        </Col>
      </Row>
    </>
  );
};

const Home = () => {
  const { user, isSignedIn } = useSelector((state) => state.auth);
  return isSignedIn ? <HomeLoggedIn /> : <NotLoggedIn />;
};

export default Home;
