import React from 'react';
import styled from 'styled-components';

const Error = styled.div`
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`;

const ErrorText = styled.div`
  font-size: 30px;
`;

export default ({text}) => (
  <Error>
    <ErrorText>{text}</ErrorText>
  </Error>
);