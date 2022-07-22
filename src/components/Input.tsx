import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

export default function Input({ values, values2, setNumber, setNumber2 }: any) {
  const [value, setValue] = useState<number>(null);

  const addNum = (val: string, val2: string) => {
    let a = parseInt(val);
    let b = parseInt(val2);
    setValue(a + b);
  };

  return (
    <div>
      <EnterButton
        type='submit'
        className='enter_btn'
        aria-label='enter button'
        onClick={() => addNum(values, values2)}
      >
        Enter
      </EnterButton>

      <ClearButton
        type='submit'
        className='clear_btn'
        aria-label='clear button'
        onClick={() => {
          setValue(null);
          setNumber(null);
          setNumber2(null);
        }}
      >
        Clear
      </ClearButton>
      {value ? value : ''}
    </div>
  );
}

const EnterButton = styled.button`
  position: absolute;
  border: none;
  border-radius: 50%;
  color: #4ac0ee;
  top: 35%;
  left: 10%;
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

const ClearButton = styled(EnterButton)`
  top: 35%;
  left: 45%;
`;
