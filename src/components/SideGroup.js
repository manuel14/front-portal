import styled, { css } from 'styled-components';

const SideGroup = styled.div`
  display: block;

  ${props =>
    props.right &&
    css`
      float: right;
    `};
`;

export default SideGroup;
