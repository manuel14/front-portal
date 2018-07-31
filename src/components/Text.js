import styled, { css } from 'styled-components';

const Text = styled.span`
  /* prettier-ignore */
  ${props =>
    props.size &&
    css`
      font-size: ${props.size};
    `};
  /* prettier-ignore */
  ${props =>
    props.color &&
    css`
      color: ${props.color};
    `};
  /* prettier-ignore */
  ${props =>
    props.strong &&
    css`
      font-weight: bold;
    `}
  /* prettier-ignore */
  ${props =>
    props.emphasis &&
    css`
      font-style: italic;
    `}
  /* prettier-ignore */
  ${props =>
    props.center &&
    css`
      text-align: center;
    `};
  /* prettier-ignore */
  ${props =>
    props.block &&
    css`
      display: block;
    `};
    margin: ${props => props.margin}
`;

export default Text;
