import styled from 'styled-components';

const CardContainer = styled.div`
    display: ${props => props.display || 'flex'};
    justify-content: space-around;
    flex-flow: row wrap;
    padding:0;
    margin: 0;
`

export default CardContainer;