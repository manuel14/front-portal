import styled from 'styled-components';
import { NavLink} from 'react-router-dom';


const SideLink = styled(NavLink)`
  color: #ffffff;
  text-decoration: none;
  display: block;
  padding: 10px 0px 10px 10px;
  height: 56px;
  max-width: ${props => props.width || '100%'};
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

SideLink.defaultProps = {
  activeClassName: 'active',
};

export default SideLink;
