import styled from 'styled-components';

export const BuilderGlobal = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const MainCtn = styled.div`
  display: flex;
  height: calc(100% - 50px);
`;

export const PageCtn = styled.canvas`
  width: 827px;
  height: 1170px;
  background-color: white;
  box-shadow: 0px 0px 6px ${({ theme }) => theme.shadow.transparent_clair_02};
  position: absolute;
`;
