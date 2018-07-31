import React from 'react';

function ArrowLeftIcon(props) {
  return (
    <svg width={props.size || 24} height={props.size || 24} viewBox="0 0 32 32">
      <path
        d="M6.422 16.988l12.582 12.578c.552.55 1.447.55 2 0 .552-.55.552-1.445 0-1.995L9.42 15.99 21.003 4.41c.552-.55.552-1.445 0-1.997-.552-.55-1.448-.55-2 0L6.42 14.99c-.543.546-.543 1.455.002 1.998z"
        fill={props.color || '#000'}
      />
    </svg>
  );
}

export default ArrowLeftIcon;
