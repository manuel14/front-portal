import styled, { css } from 'styled-components';
import TableHead from './TableHead';
import TableBody from './TableBody';
import TableRow from './TableRow';
import TableData from './TableData';

const Table = styled.table`
  width: 100%;
  background: #ffffff;

  /* prettier-ignore */
  ${props =>
    props.fixed &&
    css`
      table-layout: fixed;
    `}

  ${TableData} {
    padding: 16px;
  }

  ${TableHead} {
    ${TableRow} {
      background-color:  #034f84;
      border-left: 1px solid #006aa3;
      border-right: 1px solid #006aa3;
    }
    ${TableData} {
      color: #ffffff;
    }
  }

  ${TableBody} {
    border: 1px solid #ccc;
    border-top: 0;
  }
`;

export default Table;
