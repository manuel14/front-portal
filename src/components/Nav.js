import React, { Component } from 'react';
import Media from 'react-media';
import NavContainer from './NavContainer';
import NavGroup from './NavGroup';
import NavLink from './NavLink';
import NavBrand from './NavBrand';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import { HammerIcon, HomeIcon, BackIcon, CloseIcon, MenuIcon, UserIcon } from './icons';

const homeIcon = <HomeIcon size={24} color="#ffffff" />;
const menuIcon = <MenuIcon size={24} color="#ffffff" />;
const backIcon = <BackIcon size={24} color="#ffffff" />;
//const userIcon = <UserIcon size={24} color="#ffffff" />;
const closeIcon = <CloseIcon size={24} color="#ffffff" />;
const hammerIcon = <HammerIcon size={24} color="#ffffff" />;

class Nav extends Component {
  onBack(event){
    event.preventDefault();
    return window.history.back()
  };

  onMenu(event){
    event.preventDefault();
    return this.props.onMenu && this.props.onMenu();
  };

  handleLogout(event){
    event.preventDefault();
    return this.props.handleLogout && this.props.handleLogout();
  }

  onAdmin = event => {
    event.preventDefault();
    this.props.onAdmin && this.props.onAdmin()
  }

  render() {
    console.log(typeof(this.props.staff));
    return (
      <Media query="(max-width: 64em)">
        {matches => (
          <NavContainer>
            <NavGroup>
              <NavLink
                to="/back"
                onClick={this.onBack}
                icon={backIcon}
                iconify
                color="rgba(0, 0, 0, 0.15)"
              />
              <NavLink to="/" icon={homeIcon} iconify />
              {this.props.staff === "true" && <NavLink
                to="/admin"
                icon={hammerIcon}
                iconify
                />
              }
            </NavGroup>
            <NavBrand
              image={this.props.image}
              title={this.props.title || 'Empleados'}
            />
            <NavGroup right>
              {/* <NavLink to="/user" icon={userIcon} iconify={matches}>
                {this.props.userName}
              </NavLink> */}
              {matches && (
                <NavLink
                  to="/menu"
                  icon={menuIcon}
                  onClick={this.onMenu}
                  iconify
                />
              )}
              <NavLink
                to="/login"
                icon={closeIcon}
                onClick={this.props.handleLogout}
                iconify
                />
            </NavGroup>
          </NavContainer>
        )}
      </Media>
    );
  }
}

export default Nav;
