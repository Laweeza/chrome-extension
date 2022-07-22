import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

export default function Input(props: any) {
  const [value, setValue] = useState<number>(0);

  const addNum = (val: string, val2: string) => {
    let a = parseInt(val);
    let b = parseInt(val2);
    setValue(a + b);
  };

  return (
    <>
      <EnterButton
        type='submit'
        className='enter_btn'
        aria-label='enter button'
        onClick={() => addNum(props.values, props.values2)}
      >
        Enter
      </EnterButton>
      {value ? value : ''}
    </>
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
