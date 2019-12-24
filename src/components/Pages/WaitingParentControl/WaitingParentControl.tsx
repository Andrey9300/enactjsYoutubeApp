import React from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import BodyText from '@enact/moonstone/BodyText';

import {CloseButton} from '../../Icons/CloseButton/CloseButton';
import {
  BearImg,
  CloseButtonWrapper,
  PosterContentWrapper,
  PosterWrapper,
  Wrapper,
} from './WaitingParentControlStyles';
import {colors} from '../../../styles/Colors';
import {setRoute} from '../../../modules/routes/routes.actions';

interface IDispatchProps {
  onClose: () => void;
}

interface IProps extends IDispatchProps {}

class WaitingParentControlComponent extends React.PureComponent<IProps> {
  public render() {
    const {onClose} = this.props;
    const closeButtonSize = 24;

    return (
      <Wrapper>
        <PosterWrapper>
          <CloseButtonWrapper>
            <CloseButton
              color={colors.white}
              size={closeButtonSize}
              onClick={onClose}
            />
          </CloseButtonWrapper>
          <PosterContentWrapper>
            <BodyText>Мультики закончились</BodyText>
            <BodyText>Самое время поиграть или почитать книжку!</BodyText>
          </PosterContentWrapper>
          <BearImg />
        </PosterWrapper>
      </Wrapper>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch): IDispatchProps => ({
  onClose: () => dispatch(setRoute('checkCode')),
});

export const WaitingParentControl = connect(
  null,
  mapDispatchToProps,
)(WaitingParentControlComponent);
