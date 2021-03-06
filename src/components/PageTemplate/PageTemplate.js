import React, { Component } from 'react';
//import styles from './PageTemplate.scss';
import styled, { css } from 'styled-components';

const Template = styled.div`
  margin-top: 5rem;
  margin-left: auto;
  margin-right: auto;
  width: 500px;
  background: white;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  padding-top: 2rem;

  //웹브라우저의 크기가 768px  미만일 때는
  @media (max-width: 768px) {
    margin-top: 1rem;
    width: calc(100%-2rem);
  }
  h1 {
    text-align: center;
    font-size: 4rem;
    font-weight: 300;
    margin: 0;
  }
  .content {
    margin-top: 2rem;
  }
`;
const PageTemplate = ({ children }) => {
  return (
    <Template>
      <h1>일정관리</h1>
      <div className={'content'}>{children}</div>
    </Template>
  );
};

export default PageTemplate;
