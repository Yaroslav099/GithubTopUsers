import React from 'react';
import styled from 'styled-components';

const Loader = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.p`
  font-size: 50px
`;

export default () => (
   <Loader>
     <Text>Loading...</Text>
   </Loader>
);