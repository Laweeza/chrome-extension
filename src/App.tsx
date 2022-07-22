import * as React from 'react';
import styled from 'styled-components';
import Sad from '../assets/sad.svg';

export default function App() {
  return (
    <Container>
      <Screen />
      {/* <Sad /> */}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  background-color: #8ae9c1;
  box-sizing: border-box;
  border: solid;
  border-radius: 8px;
  max-width: 300px;
  min-height: 580px;
  margin-right: auto;
`;

const Screen = styled.div`
  border: inherit;
  background-color: #a0eec0;
  border-radius: inherit;
  min-width: calc(100% - 100px);
  max-height: 100px;
  margin-top: 20px;
`;
