import React from 'react';

function SortDownIcon(props) {
  return (
    <svg width={props.size || 24} height={props.size || 24} viewBox="0 0 32 32">
      <path
        d="M7.393 9h17.214c.216 0 .393.187.393.415 0 .13-.055.245-.145.322L15.801 22.83a.413.413 0 0 1-.33.17.39.39 0 0 1-.319-.19L7.063 9.64a.441.441 0 0 1-.016-.425A.395.395 0 0 1 7.393 9z"
        fill={props.color || '#000'}
      />
    </svg>
  );
}

export default SortDownIcon;
