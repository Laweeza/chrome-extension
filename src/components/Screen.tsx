import * as React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { leftOperandState, operatorState, rightOperandState } from '../store/atoms';

const Screen = () => {
  const leftOperand = useRecoilValue(leftOperandState);
  const rightOperand = useRecoilValue(rightOperandState);
  const operator = useRecoilValue(operatorState);

  return (
    <ScreenContainer>
      {leftOperand}
      {operator}
      {rightOperand}
    </ScreenContainer>
  );
};

export default Screen;

const ScreenContainer = styled.div`
  border: none;
  background-color: #a0eec0;
  border-radius: inherit;
  width: calc(100% - 50px);
  height: 150px;
  margin-top: 20px;
`;
