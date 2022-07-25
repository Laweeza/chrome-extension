import { atom } from 'recoil';

export const leftOperandState = atom<string>({
  key: 'leftOperandState',
  default: null,
});

export const rightOperandState = atom<string>({
  key: 'rightOperandState',
  default: null,
});

export const operatorState = atom<string>({
  key: 'operatorState',
  default: null,
});
