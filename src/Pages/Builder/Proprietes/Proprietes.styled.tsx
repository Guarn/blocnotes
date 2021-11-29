import styled from 'styled-components';

export const ProprietesGlobal = styled.div`
  height: 100%;
  width: 240px;
  box-shadow: -3px 0 6px rgba(0, 0, 0, 0.1);
  background-color: ${({ theme }) => theme.body.builder_elements};
  transition: background-color 500ms;
  animation: appear_proprietes 0.5s forwards;

  @keyframes appear_proprietes {
    from {
      transform: translateX(240px);
    }
    to {
      transform: translateX(0px);
    }
  }
`;
