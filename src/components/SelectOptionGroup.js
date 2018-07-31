import styled from 'styled-components';

const SelectOptionGroup = styled.div`
  width: 100%;
  max-height: ${props => props.maxHeight || '200px'};
  overflow: scroll;
`;

export default SelectOptionGroup;
