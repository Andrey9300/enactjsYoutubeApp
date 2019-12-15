import styled from 'styled-components';
import {Cell, Row} from '@enact/ui/Layout';
import {colors} from '../../styles/Colors';
import KidsBackground from '../Icons/KidsBackground/KidsBackground.svg';

export const WrapperRow = styled(Row)<{padding: number}>`
  background: url(${KidsBackground});
  background-size: 130%;
  height: 100%;
  * .moonstone {
    color: ${colors.black};
  }
  padding: ${({padding}) => padding}rem;
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
  padding: 0.5rem;
`;
