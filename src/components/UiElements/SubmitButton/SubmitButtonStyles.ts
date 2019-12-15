import styled from 'styled-components';
import BodyText from '@enact/moonstone/BodyText';

import {colors} from '../../../styles/Colors';
import {Button as _Button} from '../../../styles/Button';

const ITEM_HEIGHT = '60px';
const ITEM_WIDTH = '185px';

const VERTICAL_SHIFT = '5px';
const HORIZONTAL_SHIFT = '4px';

export const Wrapper = styled.div`
  height: calc(${ITEM_HEIGHT} + ${VERTICAL_SHIFT});
  width: calc(${ITEM_WIDTH} + ${HORIZONTAL_SHIFT});
`;

export const InnerWrapper = styled.div`
  position: relative;
`;

export const Substrate = styled.div<{borderRadius: number}>`
  height: ${ITEM_HEIGHT};
  width: ${ITEM_WIDTH};
  border: 1px solid ${colors.black};
  border-radius: ${(props) => props.borderRadius}px;
  box-sizing: border-box;
`;

export const ButtoText = styled(_Button)<{
  backgroundColor: string;
  borderRadius: number;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${ITEM_HEIGHT};
  width: ${ITEM_WIDTH};
  position: absolute;
  top: ${VERTICAL_SHIFT};
  left: ${HORIZONTAL_SHIFT};
  background-color: ${(props) => props.backgroundColor};
  border-radius: ${(props) => props.borderRadius};

  :active {
    top: 0;
    left: 0;
  }
  > .moonstone {
    color: ${colors.white};
    margin: 0;
  }
`;

export const DisabledButtonMask = styled(ButtoText)`
  opacity: 0.5;
  background-color: ${colors.white};
  cursor: auto;
`;

export const Text = styled(BodyText)``;
