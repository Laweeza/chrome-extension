import * as React from 'react';
import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';

export default function CalculatorScreen() {
  const [value, setValue] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  return <Screen value={value} onChange={handleInputChange} />;
}

const Screen = styled.textarea`
  border: solid #65e2ae;
  background-color: #a0eec0;
  border-radius: inherit;
  min-width: calc(100% - 70px);
  max-height: 150px;
  margin-top: 20px;
`;
