import styled from 'styled-components';

const RadioInput = styled.input`
    position: absolute;
    opacity: 0;
    cursor: pointer;
    background-color: ${props => props.bcolor};
    display: ${props => props.display};
    
`;

export default RadioInput;