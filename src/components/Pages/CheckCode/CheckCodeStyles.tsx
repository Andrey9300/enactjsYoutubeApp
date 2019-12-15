import styled from 'styled-components';
import ri from '@enact/ui/resolution';
import Button from '@enact/moonstone/Item';

import {colors} from '../../../styles/Colors';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
`;

export const NumberButton = styled(Button)`
  border-radius: 16px;
  background-color: ${colors.blue600};
  width: ${ri.scale(100)}px;
  height: ${ri.scale(100)}px;
  margin: ${ri.scale(50)}px;
`;

export const NumberButtonCheck = styled(NumberButton)`
  background-color: ${colors.grey300};
`;
