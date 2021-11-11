/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const ValidationGlobal = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  margin-top: 10px;
  background-color: ${({ theme }) => theme.body.pale};
  border: 1px solid ${({ theme }) => theme.border.pale};
  font-weight: 200;
  color: salmon;
  font-size: 0.8rem;
  border-radius: 6px;
`;

export const ErrorCtn = styled.div`
  padding: 5px;
  margin-top: 2px;
`;
