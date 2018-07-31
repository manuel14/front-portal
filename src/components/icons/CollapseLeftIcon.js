import React from 'react';

function CollapseLeftIcon(props) {
  return (
    <svg width={props.size || 24} height={props.size || 24} viewBox="0 0 32 32">
      <g fill={props.color || '#000'}>
        <path d="M5.304 16.785l9.356 9.89c.41.433 1.076.433 1.487 0 .41-.432.41-1.136 0-1.568L7.533 16l8.613-9.105c.41-.433.41-1.137 0-1.57a1.014 1.014 0 0 0-1.487 0l-9.356 9.89a1.169 1.169 0 0 0 .001 1.57z" />
        <path d="M11.85 16.785l9.355 9.89c.41.433 1.076.433 1.487 0 .41-.432.41-1.136 0-1.568L14.08 16l8.612-9.105c.41-.433.41-1.137 0-1.57a1.014 1.014 0 0 0-1.487 0l-9.356 9.89a1.169 1.169 0 0 0 .002 1.57z" />
      </g>
    </svg>
  );
}

export default CollapseLeftIcon;
