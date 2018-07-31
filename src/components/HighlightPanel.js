import React from 'react';
import styled, { css } from 'styled-components';
import { Box } from 'grid-styled';

const Panel = ({ children, borderTop, borderBottom, ...rest }) => (
  <Box {...rest}>{children}</Box>
);

const HighlightPanel = styled(Panel)`
  font-family: 'FiraSans';
  background-color: #fff;
  padding: ${props => props.p || '16px'};

  ${props =>
    props.borderTop &&
    css`
      border-top: 1px solid #ccc;
    `};

  ${props =>
    props.borderBottom &&
    css`
      border-bottom: 1px solid #ccc;
    `};
`;

export default HighlightPanel;
