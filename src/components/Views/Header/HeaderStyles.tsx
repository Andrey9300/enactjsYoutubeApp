import styled from 'styled-components';
import {Header} from '@enact/moonstone/Panels';

import {colors} from '../../../styles/Colors';

export const WrapperHeader = styled(Header).attrs(() => ({
  hideLine: true,
}))`
  color: ${colors.grey500} !important;
`;
