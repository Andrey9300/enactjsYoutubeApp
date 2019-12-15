import styled from 'styled-components';
import IncrementSlider from '@enact/moonstone/IncrementSlider';
import ri from '@enact/ui/resolution';
import Button from '@enact/moonstone/Item';

import BackArrow from '../../Icons/BackArrow/BackArrow.svg';
import {colors} from '../../../styles/Colors';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: ${ri.scale(50)}px;
`;

export const WrapperIncrementSlider = styled(IncrementSlider)``;

export const WrapperControls = styled.div`
  background-color: ${colors.white};
  box-shadow: 0 0 ${ri.scale(10)}px;
  border-radius: ${ri.scale(4)}px;
  padding: ${ri.scale(10)}px;
  width: 30%;
`;

export const Age = styled.div``;

export const Timer = styled.div``;

export const WrapperBackArrow = styled(Button)`
  background: url(${BackArrow});
  width: ${ri.scale(150)}px;
  height: ${ri.scale(50)}px;
  margin-bottom: ${ri.scale(50)}px;
  background-size: cover;
  transform: rotate(180deg);
`;
