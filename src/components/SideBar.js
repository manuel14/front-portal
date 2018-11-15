import React, { Component } from 'react';
import SideContainer from './SideContainer';
import SideGroup from './SideGroup';
import SideLink from './SideLink';
import Title from './Title';


class SideBar extends Component {
  constructor(props){
    super(props)
  }

  render() {
    const { links } = this.props;
    return (
      <SideContainer>
        <SideGroup>
          {links.map((link) => {
            return <SideLink
              to={link}
              color="rgba(0, 0, 0, 0.15)"
            >
              <Title color={'#ffffff'}>
                {link.replace('/', '')}
              </Title>
            </SideLink>
          })}
        </SideGroup>
      </SideContainer>
    );
  }
}

export default SideBar;
