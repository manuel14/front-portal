import styled from 'styled-components';

const Input = styled.input.attrs({
  type: props => props.type || 'text',
  name: props => props.name,
  size: props => props.small ? 3 : 24,
})`
  height: ${props => props.height || '20px'};
  padding: ${props => props.padding};
  margin: ${props => props.margin}
`;

export default Input;