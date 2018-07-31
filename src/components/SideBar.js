import React, { Component } from 'react';
import SideContainer from './SideContainer';
import SideGroup from './SideGroup';
import SideLink from './SideLink';


class SideBar extends Component {
  constructor(props){
    super(props)
  }

  render() {
    const {links} = this.props;
    return (
          <SideContainer>
            <SideGroup>
              {links.map((link) => {
                return <SideLink
                  to={link}
                  color="rgba(0, 0, 0, 0.15)"
                >
                {link.replace('/', '')}
                </SideLink>
              })}
            </SideGroup>
          </SideContainer>
    );
  }
}

export default SideBar;
