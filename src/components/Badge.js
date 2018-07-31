import styled from 'styled-components';

const Badge = styled.span`
  display: inline-block;
  color: '#ffffff';
  background-color: ${props => props.color || '#555'};
  padding: 2px 6px;
  font-size: 1.3rem;
  font-family: FiraSans;
  transform: translateY(-4px);
`;

export default Badge;
