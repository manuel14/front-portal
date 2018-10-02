import styled, { css } from 'styled-components';

const TableData = styled.td`
  margin: 0;
  color: #292b2c;
  padding: 0;
  vertical-align: middle;
  width: ${props => props.width || 'auto'};

  ${props =>
    props.minWidth &&
    css`
      min-width: ${props => props.minWidth};
    `};

  ${props =>
    props.maxWidth &&
    css`
      max-width: ${props => props.maxWidth};
    `};

  ${props =>
    props.center &&
    css`
      text-align: center;
    `};

  ${props =>
    props.right &&
    css`
      text-align: right;
    `};

  ${props =>
    props.nowrap &&
    css`
      white-space: nowrap;
    `};

  ${props =>
    props.hoverable &&
    css`
      &:hover {
        cursor: pointer;
      }
    `};
`;

export default TableData;
