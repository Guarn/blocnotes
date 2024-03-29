/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import themeClair from '../../Shared/GlobalTheme/clair';

export const InputGlobal = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export const ChampInputCtn = styled.div<{
  labelOptions?: {
    placement?: 'top' | 'left';
    opacity?: number;
    couleurs?: { themeClair: string; themeSombre: string };
  };
}>`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: ${({ labelOptions }) =>
    labelOptions?.placement === 'left' ? 'row' : 'column'};
  position: relative;
  & > label {
    padding-bottom: ${({ labelOptions }) =>
      labelOptions?.placement === 'left' ? '0px' : '5px'};
    padding-right: ${({ labelOptions }) =>
      labelOptions?.placement === 'left' ? '5px' : '0px'};
    color: ${({ theme, labelOptions }) => {
      if (!labelOptions?.couleurs) {
        return 'inherit';
      }
      return theme === themeClair
        ? labelOptions.couleurs.themeClair
        : labelOptions.couleurs.themeSombre;
    }};
  }
  & > label > span {
    color: orange;
  }
`;

export const ChampInput = styled.input`
  box-sizing: border-box;
  outline: none;
  padding: 8px 15px;
  border-radius: 3px;
  border: 1px solid ${({ theme }) => theme.border.pale};
  background-color: ${({ theme }) => theme.body.pale};
  color: ${({ theme }) => theme.text.color1};
  &:focus {
    box-shadow: 0 0 6px ${({ theme }) => theme.shadow.transparent_clair_02};
  }
  &::placeholder {
    font-style: italic;
    color: ${({ theme }) => theme.text.color1};
    font-weight: 200;
  }
  transition: color 0.5s, background-color 0.5s, border 0.5s, box-shadow 0.5s;
  font-size: 1.1rem;
  letter-spacing: normal;
  font-weight: 300;
`;

export const Label = styled.label`
  font-weight: 700;
  opacity: 0.6;
`;
