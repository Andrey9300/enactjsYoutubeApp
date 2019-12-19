import styled from 'styled-components';
import ri from '@enact/ui/resolution';
import Button from '@enact/moonstone/Item';
import BodyText from '@enact/moonstone/BodyText';

import {colors} from '../../../styles/Colors';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
`;

export const NumberButton = styled(Button)<{bordercolor?: string}>`
  border-radius: 16px;
  background-color: ${colors.white};
  border: solid
    ${({bordercolor}) => (bordercolor ? bordercolor : colors.grey300)};
  width: ${ri.scale(100)}px;
  height: ${ri.scale(100)}px;
  margin: ${ri.scale(50)}px;
`;

export const NumberButtonCheck = styled(NumberButton)`
  background-color: ${colors.grey300};
`;

export const EnterNumber = styled(BodyText)``;

export const ErrorMessage = styled(BodyText)`
  color: ${colors.red100} !important;
  height: 32px !important;
`;
