import styled, { css } from 'styled-components';

const SelectSelector = styled.button`
  width: 100%;
  font-size: 14px;
  border: 1px solid #ccc;
  height: 36px;
  padding: 0 10px;
  background: none;
  text-align: left;
  position: relative;
  display: flex;
  align-items: center;

  ${props =>
    props.selected &&
    css`
      border-color: #b3b3b3 #ccc #d9d9d9;
    `};

  &:focus {
    outline: 0;
  }
`;

export default SelectSelector;
