import styled, {keyframes} from 'styled-components';

import { createElement } from 'react';

const fade_in = keyframes`
    from{bottom: 0; opacity: 0;};
    to {bottom: 30px; opacity: 1;}
`;

const fade_out = keyframes`
    from{bottom: 30px; opacity: 1;};
    to {bottom: 0; opacity: 0;}
`;

const Toast = styled.div`
    visibility: ${props => props.visible}  /* Hidden by default. Visible on click */
    min-width: 250px; /* Set a default minimum width */
    margin-left: -125px; /* Divide value of min-width by 2 */
    background-color: #333; /* Black background color */
    color: #fff; /* White text color */
    text-align: center; /* Centered text */
    border-radius: 2px; /* Rounded borders */
    padding: 16px; /* Padding */
    position: fixed; /* Sit on top of the screen */
    z-index: 1; /* Add a z-index if needed */
    left: 50%; /* Center the snackbar */
    bottom: 30px; /* 30px from the bottom */
    animation: ${fade_in} ease-in, ${fade_out} ease-out;
    animation-duration: 3s;
    animation-iteration-count: 1;
`




export default Toast;