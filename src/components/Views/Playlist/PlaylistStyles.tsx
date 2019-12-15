import styled from 'styled-components';
import ri from '@enact/ui/resolution';

import {colors} from '../../../styles/Colors';
import {Item} from '../Item/Item';

export const widthItem = 480;
export const heightItem = 370;

export const WrapperGridListImageItem = styled(Item).attrs(() => ({
  style: {
    color: colors.black,
    backgroundColor: colors.white,
    width: `${ri.scale(widthItem)}px`,
    height: `${ri.scale(heightItem)}px`,
    boxShadow: `0 0 ${ri.scale(10)}px`,
  },
}))`
  > div {
    color: ${colors.black} !important;
  }
`;
