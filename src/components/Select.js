import React from 'react';
import styled from 'styled-components';
import { default as ReactSelect } from 'react-select';
import SelectLabel from './SelectLabel';


const StyledSelect = styled(ReactSelect).attrs({
  required: props => props.required || "",
  name: props => props.name
})
`
  .Select-control,
  .Select-menu-outer {
    border-radius: 1px;
  }
  margin: ${props => props.margin};
`;


const Select = ({ label, labelMargin, ...rest }) => (
  <div>
    {label && <SelectLabel margin={labelMargin}>{label}</SelectLabel>}
    <StyledSelect {...rest} />
  </div>
);

export default Select;
