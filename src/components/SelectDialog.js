import styled, { css } from 'styled-components';

const SelectDialog = styled.div`
  min-width: 100%;
  border: 1px solid #ccc;
  margin-top: -1px;
  background-color: #fff;
  z-index: 1;
  position: absolute;
  box-shadow: 0px 2px 4px -2px rgba(0, 0, 0, 0.5);

  ${props =>
    props.right &&
    css`
      right: 0;
    `};
`;

export default SelectDialog;
