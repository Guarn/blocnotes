import styled from 'styled-components';

export const MenuGlobal = styled.div`
  height: 50px;
  background-color: ${({ theme }) => theme.body.builder_menu};
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
  z-index: 10;
  transform: translateY(-50px);
  animation: appear_menu 0.5s forwards;

  @keyframes appear_menu {
    from {
      transform: translateY(-50px);
    }
    to {
      transform: translateY(0px);
    }
  }
`;
