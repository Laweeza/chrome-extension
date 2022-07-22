import * as React from 'react';
import { MouseEvent } from 'react';
import CalculatorScreen from './components/CalculatorScreen';
import styled from 'styled-components';
import Sad from '../assets/sad.svg';

export default function App() {
  const handleOnEnter = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    alert('submitted');
  };

  return (
    <Container>
      <CalculatorScreen />
      {/* <Sad /> */}
      <button type='submit' className='enter_btn' aria-label='enter button' onClick={handleOnEnter}>
        Enter
      </button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  background-color: #8ae9c1;
  box-sizing: border-box;
  border-radius: 10px;
  max-width: 300px;
  min-height: 580px;
  margin-right: auto;
`;
