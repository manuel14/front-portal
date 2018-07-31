import styled from 'styled-components';

const Avatar = styled.img`
  flex: 0 0 96px;
  width: ${props => props.width || '96px'};
  height: ${props => props.height || '96px'};
  margin: ${props => props.margin || 0};
  src: ${props => props.src};


`;

export default Avatar;