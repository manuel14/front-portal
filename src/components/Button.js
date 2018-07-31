import styled, { css } from 'styled-components';

const Button = styled.button`
  font-family: FiraSansMedium;
  color: #ffffff;
  background-color: #d6d6d6;
  text-transform: uppercase;
  border: 0;
  border-radius: 25px;
  text-align: center;
    cursor: pointer;
  padding: 0.5rem 1rem;
  margin: ${props => props.margin}
  font-size: 14px;


  ${props =>
    props.primary &&
    css`
      background-color: #006aa3;
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
    
`;

export default Button;
