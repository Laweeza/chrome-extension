import * as React from 'react';
import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import Input from './components/Input';

export default function App() {
  const [number, setNumber] = useState<number>(null);
  const [number2, setNumber2] = useState<number>(null);

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setNumber(parseInt(e.target.value));
  };

  const handleInputChange2 = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setNumber2(parseInt(e.target.value));
  };

  return (
    <Container>
      <Screen value={number ? number : ''} onChange={handleInputChange} />
      <Screen2 value={number2 ? number2 : ''} onChange={handleInputChange2} />
      <Input values={number ? number : ''} values2={number2 ? number2 : ''} />
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

const Screen = styled.textarea`
  border: none;
  background-color: #a0eec0;
  border-radius: inherit;
  min-width: calc(100% - 280px);
  max-height: 150px;
  margin-top: 20px;
`;

const Screen2 = styled(Screen)``;
