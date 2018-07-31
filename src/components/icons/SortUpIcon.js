import React from 'react';

function SortUpIcon(props) {
  return (
    <svg width={props.size || 24} height={props.size || 24} viewBox="0 0 32 32">
      <path
        d="M7.393 23h17.214a.406.406 0 0 0 .393-.415.422.422 0 0 0-.145-.322L15.801 9.17a.413.413 0 0 0-.33-.17.39.39 0 0 0-.319.19L7.063 22.36a.441.441 0 0 0-.016.425c.07.132.202.215.346.215z"
        fill={props.color || '#000'}
      />
    </svg>
  );
}

export default SortUpIcon;
