import React from 'react';
import kind from '@enact/core/kind';

import {KidsLogo} from '../../Icons/KidsLogo/KidsLogo';
import {Wrapper, WrapperParentControl} from './HeaderStyles';

interface IProps {
  onClick: () => void;
}

export const Header = kind<IProps>({
  render: ({onClick}) => (
    <Wrapper>
      <KidsLogo />
      <WrapperParentControl onClick={onClick} />
    </Wrapper>
  ),
});
