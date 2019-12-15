import React from 'react';
import Button from '@enact/moonstone/Item';

import {
  ButtoText,
  DisabledButtonMask,
  InnerWrapper,
  Substrate,
  Wrapper,
  Text,
} from './SubmitButtonStyles';
import {colors} from '../../../styles/Colors';

interface IProps {
  text?: string;
  color?: string;
  disabled?: string;
  onClick?: () => void;
}

export const SubmitButton: React.FC<IProps> = ({
  text,
  onClick,
  color,
  disabled,
}) => {
  const borderRadius = 8;

  return (
    <Button onClick={onClick}>
      <Wrapper>
        <InnerWrapper>
          <Substrate borderRadius={borderRadius} />
          <ButtoText backgroundColor={color} borderRadius={borderRadius}>
            <Text>{text}</Text>
          </ButtoText>
          {disabled && (
            <DisabledButtonMask
              backgroundColor={color}
              borderRadius={borderRadius}
            />
          )}
        </InnerWrapper>
      </Wrapper>
    </Button>
  );
};

SubmitButton.defaultProps = {
  color: colors.blue600,
};
