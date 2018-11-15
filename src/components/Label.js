import styled, { css } from 'styled-components';

const Label = styled.label`
  display: ${props => props.display || "inline-block"};
  padding: ${props => props.padding || '2px 4px 2px 2px'};
  margin: ${props => props.margin || '10px 0px 10px 0px'}; 
  font-size: ${props => props.size || '18px'};
  color: ${props => props.color || ' #3b3a30'};
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
