import styled, { css } from 'styled-components';

const Button = styled.button.attrs({
  type: props => props.type
})`
  font-family: Arial;
  color: #ffffff;
  background-color: #d6d6d6;
  text-transform: uppercase;
  border: 0;
  border-radius: 15px;
  text-align: center;
  cursor: pointer;
  padding: 0.5rem 1rem;
  margin: ${props => props.margin};
  font-size: 14px;

  ${props =>
    props.primary &&
    css`
      background-color: #0e97e0;
    `};
  
    ${props =>
    props.small &&
    css`
        width: 64px;
        height: 32px
      `};
    
    ${props =>
    props.large &&
    css`
            width: 96px;
            height: 32px
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
