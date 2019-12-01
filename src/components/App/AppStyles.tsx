import styled from 'styled-components';
import {Cell, Row} from '@enact/ui/Layout';

export const WrapperRow = styled(Row)<{padding: number}>`
  background: url(http://pic0.oboi-store.ru/files/products/54214-3-oboi-andrea-rossi-torcello-36315172-195016.206x174xx1.jpg);
  background-size: cover;
  height: 100%;
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
