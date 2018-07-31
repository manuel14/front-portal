import styled, { css } from 'styled-components';

const SelectOption = styled.button`
  min-height: 36px;
  background: none;
  border: 0;
  display: block;
  width: 100%;
  text-align: left;
  padding: 8px 10px;

  ${props =>
    props.selected &&
    css`
      background-color: rgba(0, 126, 255, 0.04);
    `};

  &:focus {
    outline: 0;
  }

  &:hover {
    background-color: rgba(0, 126, 255, 0.08);
    cursor: pointer;
  }
`;

export default SelectOption;
