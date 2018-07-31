import React from 'react';
import styled from 'styled-components';

const Brand = ({ image, title, ...rest }) => {
  return (
    <div {...rest}>
      {image ? <img src={image} alt={title} /> : <span>{title}</span>}
    </div>
  );
};

const NavBrand = styled(Brand)`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 56px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  img {
    max-width: 120px;
    max-height: 40px;
  }
`;

export default NavBrand;
