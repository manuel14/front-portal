import styled, { css } from 'styled-components';

const NavGroup = styled.div`
  display: flex;
  float: left;

  ${props =>
    props.right &&
    css`
      float: right;
    `};
`;

export default NavGroup;
