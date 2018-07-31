import styled, { css } from 'styled-components';

const Label = styled.label`
  display: inline-block;
  background-color: ${props => props.color || '#006aa3'};
  padding: 2px 4px 2px 2px;
  margin: 10px 0px 10px 0px; 
  border: 1px solid ${props => '#ccc'};
  color: white;

  ${props =>
    props.danger &&
    css`
      background-color: rgba(255, 78, 78, 0.3);
    `};

  ${props =>
    props.warning &&
    css`
      background-color: rgba(255, 199, 88, 0.3);
    `};
`;

export default Label;
