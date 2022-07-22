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
      <EnterButton
        type='submit'
        className='enter_btn'
        aria-label='enter button'
        onClick={handleOnEnter}
      >
        Enter
      </EnterButton>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  background-color: #8ae9c1;
  box-sizing: border-box;
  border-radius: 10px;
  max-width: 300px;
  min-height: 580px;
  margin-right: auto;
`;

const EnterButton = styled.button`
  position: absolute;
  border: none;
  border-radius: 50%;
  color: #4ac0ee;
  top: 35%;
  left: 15%;
  height: 80px;
  width: 80px;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;

  &:hover {
    background-color: #4ac0ee;
    color: white;
  }
`;
