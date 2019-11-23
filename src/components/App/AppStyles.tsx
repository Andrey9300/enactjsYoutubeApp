import styled from 'styled-components';
import {Cell, Row} from '@enact/ui/Layout';

export const WrapperRow = styled(Row)`
  background: url(http://ges-design.ru/library/collage/background/background-15-9.jpg)
    no-repeat;
  background-size: cover;
  height: 100%;
  padding: 0.5rem;
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
