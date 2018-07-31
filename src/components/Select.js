import React from 'react';
import styled from 'styled-components';
import { default as ReactSelect } from 'react-select';
import SelectLabel from './SelectLabel';

const StyledSelect = styled(ReactSelect)`
  .Select-control,
  .Select-menu-outer {
    border-radius: 1px;
  }
`;

const Select = ({ label, ...rest }) => (
  <div>
    {label && <SelectLabel>{label}</SelectLabel>}
    <StyledSelect {...rest} />
  </div>
);

export default Select;
