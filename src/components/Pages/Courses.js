import React, { useState, useEffect } from 'react';
import { Row, Col, Accordion } from 'react-bootstrap';
import { SideNav } from '../common/SideNav';
import { useHistory } from 'react-router-dom';

const NotLoggedIn = () => {
  return (
    <>
      <Row>
        <Col>
          <div className="text-center p-5">
            <h1 className="mt-4">Courses not logged in</h1>
          </div>

          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>ss</Accordion.Header>
              <Accordion.Body>ss</Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </>
  );
};

const Courses = ({ user }) => {
  const history = useHistory();
  const isAuthenticated = user;
  return true ? <SideNav>ss</SideNav> : history.push('/');
};

export default Courses;
