import styled from 'styled-components';

const ToolbarContainer = styled.div`
  background-color: #005482;
  border-left: 1px solid #006aa3;
  border-right: 1px solid #006aa3;
  color: #fff;
  display: flex;
  align-items: center;

  select {
    margin: 0 8px;
    background: transparent;
    border: 0;

    &:focus {
      outline: 0;
    }
  }
`;

export default ToolbarContainer;
