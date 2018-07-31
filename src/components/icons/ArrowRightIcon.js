import React from 'react';

function ArrowRightIcon(props) {
  return (
    <svg width={props.size || 24} height={props.size || 24} viewBox="0 0 32 32">
      <path
        d="M22.996 16.988L10.414 29.566c-.552.55-1.447.55-2 0a1.409 1.409 0 0 1 0-1.995l11.584-11.582L8.415 4.41a1.411 1.411 0 0 1 0-1.996 1.418 1.418 0 0 1 2 0l12.583 12.576a1.427 1.427 0 0 1-.002 1.998z"
        fill={props.color || '#000'}
      />
    </svg>
  );
}

export default ArrowRightIcon;
