import React from 'react';

function CloseIcon(props) {
  return (
    <svg width={props.size || 24} height={props.size || 24} viewBox="0 0 32 32">
      <path
        d="M0 0h32v32H0V0zm2 2v28h28V2H2zm15.481 14L26 24.519 24.519 26 16 17.481 7.481 26 6 24.519 14.519 16 6 7.481 7.481 6 16 14.519 24.519 6 26 7.481 17.481 16z"
        fill={props.color || '#000'}
      />
    </svg>
  );
}

export default CloseIcon;
