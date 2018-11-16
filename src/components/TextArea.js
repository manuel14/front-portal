import styled from 'styled-components';

const TextArea = styled.textarea.attrs({
    required: props => props.required || "",
    value: props => props.value || ''
})`
    display: block;
    margin: ${props => props.margin || '0px'};
    resize: none;
`

export default TextArea;