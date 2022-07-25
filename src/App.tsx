import React from 'react';
import { RecoilRoot } from 'recoil';
import Screen from './components/Screen';
import styled from 'styled-components';
import { CalculatorButtons } from './components/CalculatorButtons';

export default function App() {
  return (
    <RecoilRoot>
      <Container>
        <Screen />
        <CalculatorButtons />
      </Container>
    </RecoilRoot>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: #8ae9c1;
  box-sizing: border-box;
  border-radius: 10px;
  width: 300px;
  height: 580px;
  margin-right: auto;
`;
