import React from 'react';

function BulletIcon(props) {
  return (
    <svg width={props.size || 24} height={props.size || 24} viewBox="0 0 32 32">
      <circle cx="16" cy="16" r="14" fill={props.color || '#000'} />
    </svg>
  );
}

export default BulletIcon;
