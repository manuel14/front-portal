import styled, { css } from 'styled-components';

const Button = styled.button.attrs({
  type: props => props.type
})`
  font-family: Arial;
  color: #ffffff;
  background-color: #d6d6d6;
  border: 0;
  border-radius: 15px;
  text-align: center;
  cursor: pointer;
  padding: 0.5rem 3.2rem;
  width: ${props => props.width || 'auto'};
  margin: ${props => props.margin};
  font-size: ${props => props.size || '18px'};
  display: ${props => props.display || 'inline-block'};

  ${props =>
    props.primary &&
    css`
      background-color: #0e97e0;
    `};
  ${props =>
    props.danger &&
    css`
      background-color: #a30019;
    `};
  
    ${props =>
    props.success &&
    css`
        background-color: #4CAF50;
      `};
        ${props =>
    props.success &&
    css`
        background-color: #4CAF50;
      `};
`;

export default Button;
