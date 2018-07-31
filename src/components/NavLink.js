import React from 'react';
import styled from 'styled-components';
import { NavLink as RouterLink } from 'react-router-dom';

const IconLink = ({ icon, iconify, children, ...rest }) => (
  <RouterLink {...rest}>
    {!iconify && children}
    {icon}
  </RouterLink>
);

const NavLink = styled(IconLink)`
  color: #ffffff;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  height: 56px;
  width: ${props => (props.iconify ? '56px' : 'auto')};
  z-index: 100;
  background-color: ${props => (props.color ? props.color : 'transparent')};

  svg {
    margin-left: ${props => (!props.iconify ? '8px' : '0')};
  }

  &:hover,
  &:focus {
    outline: none;
    color: #ffffff;
    background-color: rgba(0, 0, 0, 0.3);
    text-decoration: none;
  }
`;

NavLink.defaultProps = {
  activeClassName: 'active',
};

export default NavLink;
