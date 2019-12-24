import styled from 'styled-components';
import ri from '@enact/ui/resolution';

import bear from '../../../images/bear.png';
import kidsPosterBackground from '../../../images/kidsPosterBackground.svg';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${ri.scale(8)}px;
  height: 100%;
`;

export const PosterWrapper = styled.div`
  width: ${ri.scale(1200)}px;
  height: ${ri.scale(600)}px;
  box-shadow: 0 0 ${ri.scale(10)}px;
  border-radius: ${ri.scale(12)}px;
  background: url(${kidsPosterBackground}) no-repeat;
  background-size: cover;
`;

export const BearImg = styled.div`
  width: ${ri.scale(436)}px;
  height: ${ri.scale(234)}px;
  background: url(${bear}) no-repeat;
  margin-left: 600px;
`;

export const PosterContentWrapper = styled.div`
  margin-top: 150px;
`;

export const CloseButtonWrapper = styled.div`
  float: right;
  margin: 20px;
`;
