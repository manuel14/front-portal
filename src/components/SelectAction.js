import styled, { css } from 'styled-components';

const SelectAction = styled.button`
  height: 40px;
  font-size: 14px;
  background: none;
  border: 0;
  display: block;
  width: 50%;
  border-top: 1px solid #ccc;
  border-left: 1px solid #ccc;

  ${props =>
    props.disabled &&
    css`
      color: #ccc;
    `};

  ${props =>
    props.default &&
    css`
      font-family: FiraSansMedium;
      text-transform: uppercase;
    `};

  &:hover {
    background-color: rgba(204, 204, 204, 0.5);
    cursor: pointer;
  }

  &:focus {
    outline: 0;
  }

  &:first-child {
    border-left: 0;
  }
`;

export default SelectAction;
