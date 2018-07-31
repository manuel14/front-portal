import React from 'react';

function CollapseRightIcon(props) {
  return (
    <svg width={props.size || 24} height={props.size || 24} viewBox="0 0 32 32">
      <g fill={props.color || '#000'}>
        <path d="M26.696 16.785l-9.356 9.89a1.014 1.014 0 0 1-1.487 0 1.153 1.153 0 0 1 0-1.568L24.467 16l-8.613-9.105a1.155 1.155 0 0 1 0-1.57 1.014 1.014 0 0 1 1.487 0l9.356 9.89c.404.428.404 1.143-.001 1.57z" />
        <path d="M20.15 16.785l-9.355 9.89a1.014 1.014 0 0 1-1.487 0 1.153 1.153 0 0 1 0-1.568L17.92 16 9.31 6.895a1.155 1.155 0 0 1 0-1.57 1.014 1.014 0 0 1 1.487 0l9.356 9.89c.404.428.404 1.143-.002 1.57z" />
      </g>
    </svg>
  );
}

export default CollapseRightIcon;
