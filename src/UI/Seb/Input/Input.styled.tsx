import styled from 'styled-components';

export const FormInputContain = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export const FormInputInline = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 10px;
`;

export const FormInput = styled.input`
  font-size: 1.1rem;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 8px 15px;
  border: 1px solid ${({ theme }) => theme.border.pale};
  transition: box-shadow 0.2s;
  color: ${({ theme }) => theme.text.color1};
  &:focus {
    box-shadow: 0 0 6px ${({ theme }) => theme.shadow.transparent_clair_02};
  }
  &::placeholder {
    color: ${({ theme }) => theme.text.color1};
    font-weight: 300;
  }
  transition: color 0.2s, background-color 0.2s, border 0.2s, box-shadow 0.2s;
  letter-spacing: normal;
`;
