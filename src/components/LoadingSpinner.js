import React from 'react';
import styled, { keyframes } from 'styled-components';

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

const Icon = styled.div`
  background-color: ${props => props.color};
  height: ${props => props.size}px;
  width: ${props => props.size}px;
  animation: ${rotate360} 2s ease infinite;
  display: inline-block;
  border-radius: 10%;
`;

const Text = styled.span`
  color: ${props => props.color};
  font-size: ${props => props.size};
  padding-left: 8px;
  padding-top: 2px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
`;

function LoadingSpinner({ size = 16, color = '#555', text }) {
  return (
    <Container>
      <Icon size={size} color={color} />
      <Text size={size} color={color}>
        {text || 'Loading...'}
      </Text>
    </Container>
  );
}

export default LoadingSpinner;
