import styled, { css } from 'styled-components';

const SelectArrow = styled.span`
  display: inline-block;
  border-style: solid;
  height: 0;
  width: 0;
  border-color: #999 transparent transparent;
  border-width: 5px 5px 2.5px;
  margin-top: 4px;
  margin-bottom: 0;
  margin-left: auto;

  ${props =>
    props.up &&
    css`
      border-color: transparent transparent #999;
      border-width: 0 5px 5px;
      margin-top: 0;
      margin-bottom: 4px;
    `};
`;

export default SelectArrow;
