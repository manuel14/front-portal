import styled, { css } from 'styled-components';
import Badge from './Badge';

const Title = styled.span`
  display: block;
  font-size: 2rem;
  font-family: FiraSansMedium;
  padding-top: ${props => props.pt || 0};
  padding-bottom: ${props => props.pb || 0};
  padding-left: ${props => props.pl || 0};
  padding-right: ${props => props.pr || 0};
  margin: ${props => props.margin};
  text-align: ${props => props.align || 'left'}

  ${Badge} {
    color: #fff;
  }

  ${props =>
    props.inline &&
    css`
      display: inline-block;
    `};

  ${props =>
    props.header &&
    css`
      font-size: 2.4rem;
    `};

  ${props =>
    props.small &&
    css`
      font-size: 1rem;
    `};
    ${props =>
    props.color &&
    css`
        color: ${props.color};
      `};
      ${props =>
        props.center &&
        css`
            text-align: center;
          `};
`;

export default Title;
