import React, { Component } from 'react';
import styled, { css } from 'styled-components';

class ModalHandler extends Component {
  componentDidMount() {
    document.body.classList.add('modal-opened');
  }

  componentWillUnmount() {
    document.body.classList.remove('modal-opened');
  }

  render() {
    const { mobile, ...rest } = this.props;
    return <div {...rest} />;
  }
}

const Modal = styled(ModalHandler)`
  position: fixed;
  top: 0px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;

  ${props =>
    !props.mobile &&
    css`
      padding: 16px;
    `};
`;

export default Modal;
