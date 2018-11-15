import styled, { css } from 'styled-components';

const PagerItem = styled.div`
  color: #555;
  padding: 8px;
  cursor: pointer;
  background-color: ${props => (props.bg ? props.bg : 'transparent')};

  &:hover {
    background-color: ${props =>
      props.clickeable ? 'rgba(85, 85, 85, 0.1)' : 'transparent'};
  }

  svg {
    vertical-align: middle;
  }

  ${props =>
    props.selected &&
    css`
      color: #333;
    `};
`;

export default PagerItem;
