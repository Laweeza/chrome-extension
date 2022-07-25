import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { leftOperandState, operatorState, rightOperandState } from '../store/atoms';

export const CalculatorButtons = () => {
  const [leftOperand, setLeftOperand] = useRecoilState(leftOperandState);
  const [rightOperand, setRightOperand] = useRecoilState(rightOperandState);
  const [operator, setOperator] = useRecoilState(operatorState);

  return (
    <ButtonContainer>
      <ButtonRow>
        {Array.from(Array(10)).map((_, i) => {
          return (
            <StyledButton
              onClick={() => {
                if (leftOperand && !operator) {
                  setLeftOperand(leftOperand + i.toString());
                  return;
                } else if (!leftOperand) {
                  setLeftOperand(i.toString());
                  return;
                }

                if (leftOperand && operator && rightOperand) {
                  setRightOperand(rightOperand + i.toString());
                  return;
                } else if (!rightOperand && leftOperand && operator) {
                  setRightOperand(i.toString());
                }
              }}
            >
              {i}
            </StyledButton>
          );
        })}
        <StyledButton
          onClick={() => {
            if (!operator) {
              if (leftOperand) {
                setOperator('+');
              }
            }
          }}
        >
          +
        </StyledButton>
      </ButtonRow>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  width: inherit;
  justify-content: space-evenly;
  margin-top: 20px;
`;

const ButtonRow = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr 1fr 1fr;
`;

const StyledButton = styled.button`
  border-radius: 50%;
  padding: 20px;
  border: none;
`;
