import styled from 'styled-components';

const Input = styled.input.attrs({
  required: props => props.required || "",
  type: props => props.type || 'text',
  name: props => props.name,
  size: props => props.small ? 3 : 24,
  value: props => props.value || null,
  id: props => props.id
})`
  height: ${props => props.height || '30px'};
  padding: ${props => props.padding};
  margin: ${props => props.margin};
  display: ${props => props.display || 'inline-block'};
  width: ${props => props.width || '240px'};
  border:  1px solid;
  border-radius: 4px;
`;

export default Input;