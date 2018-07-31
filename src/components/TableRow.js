import styled, { css } from 'styled-components';

const TableRow = styled.tr`
  height: auto;

  ${props =>
    props.bordered &&
    css`
      border-bottom: 1px solid #a4a4a4;
    `};

  ${props =>
    props.selected &&
    css`
      background-color: #eeeeee;
    `};

  ${props =>
    props.backgroundColor &&
    css`
      background-color: ${props.backgroundColor};
    `};

  ${props =>
    props.danger &&
    css`
      td {
        background-color: rgba(255, 78, 78, 0.3);
      }
    `};

  ${props =>
    props.warning &&
    css`
      td {
        background-color: rgba(255, 199, 88, 0.3);
      }
    `};

  ${props =>
    props.onClick &&
    css`
      cursor: pointer;
    `};

  &:hover {
    ${props =>
      props.onClick &&
      css`
        background-color: #eeeeee;
      `};
  }
`;

export default TableRow;
