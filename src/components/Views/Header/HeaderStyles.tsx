import styled from 'styled-components';
import ri from '@enact/ui/resolution';
import Button from '@enact/moonstone/Item';

import ParentControl from '../../Icons/ParentControl/ParentControl.svg';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const WrapperParentControl = styled(Button)`
  background: url(${ParentControl}) no-repeat;
  background-size: cover;
  width: ${ri.scale(50)}px;
  height: ${ri.scale(50)}px;
  margin: 0 ${ri.scale(50)}px;
`;
