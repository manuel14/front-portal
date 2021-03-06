import React from 'react';
import styled, { css } from 'styled-components';
import { Box } from 'grid-styled';

const Container = ({ children, ...rest }) => (
  <Box {...rest}>{children}</Box>
);

const Form = styled.form.attrs({
  onSubmit: props => props.onSubmit,
  name: props => props.name,
  id: props => props.id
})`

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

export default Form;
