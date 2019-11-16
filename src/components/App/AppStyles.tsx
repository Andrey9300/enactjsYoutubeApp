import styled from 'styled-components';
import {Cell, Row} from '@enact/ui/Layout';

import {colors} from '../../styles/Colors';

export const WrapperRow = styled(Row)`
  background-color: ${colors.grey500};
  height: 100%;
`;

export const WrapperCell = styled(Cell)<{
  display: string;
}>`
  display: ${({display}) => display};
  margin-top: 4rem;
  margin-left: 1rem;
`;

export const WrapperCellHeader = styled(Cell)<{
  display: string;
}>`
  display: ${({display}) => display};
`;
