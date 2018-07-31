import React from 'react';
import styled, {css} from 'styled-components';
import {Box} from 'grid-styled';

const Container = ({ children, headed, error, ...rest }) => (
    <Box width={1000} height={1000} {...rest}>{children}</Box>
  );

const Image = styled(Container)`
    border: 1px solid #000;
    width: 1000px;
    height: 1000px;

    ${props =>
        props.source &&
        css`
        background-image: url(${props.source});
        `};
`;

export default Image
