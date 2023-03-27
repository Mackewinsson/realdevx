import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { CourseCard } from '../common/CourseCard';
import { Row, Col } from 'react-bootstrap';
import FirebaseUserService from '../../firebase/FirebaseUserService';

export const HomeLoggedIn = () => {
  const courses = [1, 2];

  return (
    <MainWrapper>
      <TextCenter>
        <h2>Cursos</h2>
      </TextCenter>
      <Row xs={1} md={3} className="g-4 pt-5">
        {courses && courses.map((course) => <CourseCard key={course} />)}
      </Row>
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  display: flex;
  padding: 50px;
  height: 100%;
  flex-direction: column;
  align-items: center;
`;

const TextCenter = styled.div`
  display: flex;
  width: 100%;
`;
