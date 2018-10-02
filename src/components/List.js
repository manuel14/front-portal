import styled from 'styled-components';

const List = styled.ul.attrs({
  name: props => props.name
})`
  height: ${props => props.height || '80px'};
  padding: ${props => props.padding};
  margin: ${props => props.margin};
  overflow: ${props => props.overflow || 'auto'};
`;

export default List;