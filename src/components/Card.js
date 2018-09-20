import React from 'react';
import styled, { css } from 'styled-components';
import { Box } from 'grid-styled';

const Container = ({ children, headed, error, ...rest }) => (
  <Box {...rest}>{children}</Box>
);

const Card = styled(Container)`
  background-color: ${props => props.color || "#b2b2b2"};
  overflow-x: none;
  overflow-y: none;

  margin: ${props => props.margin} || auto;
  width: ${props => props.width};
  height: ${props => props.height};

  ${props =>
    props.center &&
    css`
      text-align: center;
    `};

    ${props =>
    props.headed &&
    css`
        border-top: 0;
      `};

  ${props =>
    props.error &&
    css`
      color: #a30019;
      border-color: #a30019;
      background-color: rgba(163, 0, 25, 0.05);
    `};
`;

export default Card;
