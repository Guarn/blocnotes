import styled from 'styled-components';
import { PageDefault } from '../../Shared/css/pageStyles';

export const ConnexionGlobal = styled.div`
  ${PageDefault}
  justify-content:center;
  user-select: none;
`;

export const Encart = styled.div`
  width: 450px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background-color: ${({ theme }) => theme.body.assombri};
  border-radius: 30px;
  box-shadow: 3px 3px 6px ${({ theme }) => theme.border.assombri};
  border: 1px solid ${({ theme }) => theme.border.assombri};
  transition: border 500ms, background-color 500ms, box-shadow 500ms;
`;

export const Form = styled.form<{ firstLoad: boolean }>`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  width: 90%;
  box-sizing: border-box;

  & input:-webkit-autofill {
    box-shadow: 0 0 0px 9999px ${({ theme }) => theme.body.builder_elements}
      inset;
    color: ${({ theme }) => theme.text.color1};
    box-sizing: border-box;
    font-family: Roboto;
    font-size: 20px;
    font-style: italic;
    border-color: red;
    -webkit-text-fill-color: ${({ theme }) => theme.text.color1} !important;
    transition: ${({ firstLoad }) => (firstLoad ? 'none' : 'box-shadow 500ms')};
  }
`;

export const ConnexionAuto = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  cursor: pointer;
`;

export const ConnexionAutoTexte = styled.span`
  color: #b57676;
  margin-left: 10px;
  font-style: italic;
  font-size: 18px;
`;

export const Submit = styled.button`
  background-color: ${({ theme }) => theme.body.pale};
  height: 45px;
  border: 1px solid ${({ theme }) => theme.border.assombri};
  color: #7693b5;
  text-decoration: none;
  font-size: 20px;
  margin-top: 50px;
  cursor: pointer;
  transition: background-color 500ms, box-shadow 500ms, border 500ms;
  &:hover {
    box-shadow: 0 0 6px ${({ theme }) => theme.border.assombri};
  }
`;
