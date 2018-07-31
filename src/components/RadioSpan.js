import styled from 'styled-components';

const RadioSpan = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: ${props => props.bcolor};
    display: ${props => props.display};
    border-radius: 50%;
    &:after {
        content: "";
        position: absolute;
        display:  ${props => props.display};
        top: 9px;
	    left: 9px;
	    width: 8px;
	    height: 8px;
	    border-radius: 50%;
        background: white;
      }
`;

export default RadioSpan;