import styled from 'styled-components';
import React from 'react';

const SelectContainer = ({options, ...rest}) => (
    <select onChange={rest.onChange} name={rest.name} value={rest.value}>
        {options.map(opt => {
            <option value={opt.value}>{opt.value}</option>
        }) }
    </select>
)

const MySelect = styled(SelectContainer)`
    margin: ${props => props.margin};
    padding: ${props => props.padding};
`;

export default MySelect;