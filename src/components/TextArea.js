import styled from 'styled-components';

const TextArea = styled.textarea.attrs({
    required: props => props.required || ""
})`
    display: block;
    margin: ${props => props.margin || '0px'};
`

export default TextArea;