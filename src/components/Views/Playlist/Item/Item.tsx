import React from 'react';
import BodyText from '@enact/moonstone/BodyText';
import kind from '@enact/core/kind';

interface IProps {
  title: string;
  src: string;
  duration: string;
}

export const Item = kind<IProps>({
  render: () => (
    <BodyText>
      Main pattern illustrates the use of the <code>Routable</code> HOC to
      navigate a hierarchal tree of <code>Panel</code>s.
    </BodyText>
  ),
});
