/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const ValidationGlobal = styled.div`
  display: flex;
  flex-direction: column;
  width: inherit;
  font-weight: 400;
  color: salmon;
  padding-left: 10px;
  font-size: 1rem;
  border-radius: 3px;
  box-sizing: border-box;
  bottom: -40px;
  left: 0;
  z-index: 9999;
`;

export const ErrorCtn = styled.div`
  padding: 5px;
  margin-top: 2px;
`;
