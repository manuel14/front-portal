import styled from 'styled-components';

const ListItem = styled.li.attrs({
  key: props => props.key,
  name: props => props.name
})`
  color: ${props => props.color || 'black'};
`;

export default ListItem;