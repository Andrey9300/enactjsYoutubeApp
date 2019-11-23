import styled from 'styled-components';
import ri from '@enact/ui/resolution';

import {colors} from '../../../styles/Colors';
import {Item} from '../Item/Item';

export const widthItem = 480;
export const heightItem = 370;

export const WrapperGridListImageItem = styled(Item).attrs(() => ({
  style: {
    color: `${colors.black}`,
    width: `${ri.scale(widthItem)}px`,
    height: `${ri.scale(heightItem)}px`,
  },
}))``;
