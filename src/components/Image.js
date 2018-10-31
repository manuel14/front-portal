import React from 'react';
import styled from 'styled-components';
import {Box} from 'grid-styled';

const Container = ({ children, headed, error, ...rest }) => (
    <Box width={1000} height={1000} {...rest}>{children}</Box>
  );

const Image = styled.img.attrs({
    src: props => props.source
})`
    width: ${props => props.width};
    height: ${props => props.height};
    align: center;
    margin: ${props => props.margin}
    display: block;
`;

export default Image
