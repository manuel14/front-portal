import styled, { css } from 'styled-components';

const ToolbarButton = styled.button`
  height: 52px;
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.1);
  text-transform: uppercase;
  border: 0;
  border-radius: 0;
  text-align: center;
  cursor: pointer;
  padding: 0 16px;
  margin-left: ${props => props.ml || 0}px;
  margin-right: ${props => props.mr || 0}px;
  display: flex;
  align-items: center;

  ${props =>
    props.disable &&
    css`
      color: #99bacd;
      cursor: not-allowed;
    `};

  &:focus {
    outline: 0;
  }

  &:hover {
    background-color: ${props =>
      props.disable ? 'rgba(0, 0, 0, 0.1)' : 'rgba(0, 0, 0, 0.3)'};
  }

  svg {
    margin-right: 8px;
    margin-top: -2px;
  }
`;

export default ToolbarButton;
