import styled from 'styled-components';

const Input = styled.input.attrs({
  required: props => props.required || "",
  type: props => props.type || 'text',
  name: props => props.name,
  size: props => props.small ? 3 : 24,
  value: props => props.value || null,
  id: props => props.id
})`
  height: ${props => props.height || '20px'};
  padding: ${props => props.padding};
  margin: ${props => props.margin};
  display: ${props => props.display || 'inline-block'};
  width: ${props => props.width || '220px'};
`;

export default Input;