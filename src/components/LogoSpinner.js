import React from 'react';
import styled, { keyframes } from 'styled-components';
import { KBSIcon } from './icons';

const SizedContainer = ({ size, color, children, ...rest }) => (
  <div {...rest}>{children}</div>
);

const rotate360 = keyframes`
	0% {
		transform: rotate(0deg);
	}

  5% {
		transform: rotate(0deg);
	}

  50% {
		transform: rotate(180deg);
	}

  55% {
		transform: rotate(180deg);
	}

	100% {
		transform: rotate(360deg);
	}
`;

const SquareLoader = styled(SizedContainer)`
  background-color: ${props => props.color};
  height: ${props => props.size}px;
  width: ${props => props.size}px;
  animation: ${rotate360} 2s ease infinite;
  display: inline-block;
  border-radius: 10%;
`;

const LogoSpinnerContainer = styled(SizedContainer)`
  display: inline-block;
  height: ${props => props.size}px;
  width: ${props => props.size}px;
  position: relative;

  * {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`;

function LogoSpinner({ size = 64, bg = '#555', color = '#FFF' }) {
  return (
    <LogoSpinnerContainer size={size}>
      <SquareLoader size={`${size}px`} color={bg} />
      <KBSIcon size={size - 8} color={color} />
    </LogoSpinnerContainer>
  );
}

export default LogoSpinner;
