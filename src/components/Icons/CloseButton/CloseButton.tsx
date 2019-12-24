import React from 'react';

import {Wrapper} from './CloseButtonStyles';

export const CloseButton: React.FC<{
  size: number;
  color: string;
  onClick: () => void;
}> = ({size, color, onClick}) => {
  return (
    <Wrapper onClick={onClick}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 17 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16 1L1 16" strokeWidth="1.25" stroke={color} />
        <path d="M1 1L16 16" strokeWidth="1.25" stroke={color} />
      </svg>
    </Wrapper>
  );
};
