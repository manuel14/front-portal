import styled from 'styled-components';


const List = styled.ul.attrs({
  name: props => props.name
})`
  height: ${props => props.height || '80px'};
  width: ${props => props.width || '240px'};
  padding: ${props => props.padding};
  margin: ${props => props.margin};
  overflow: ${props => props.overflow || 'auto'};
  list-style-type: circle;
`;

export default List;