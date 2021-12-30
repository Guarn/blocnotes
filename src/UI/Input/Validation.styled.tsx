/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const ValidationGlobal = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${({ theme }) => theme.body.pale};
  border: 1px solid ${({ theme }) => theme.border.pale};
  font-weight: 400;
  color: salmon;
  padding-left: 10px;
  font-size: 1rem;
  border-radius: 3px;
  position: absolute;
  box-sizing: border-box;
  top: 45px;
  left: 0;
  z-index: 9999;
`;

export const ErrorCtn = styled.div`
  padding: 5px;
  margin-top: 2px;
`;
