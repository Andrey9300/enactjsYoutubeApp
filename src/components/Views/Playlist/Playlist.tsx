import React from 'react';
import Item from '@enact/moonstone/Item';
import VirtualList from '@enact/moonstone/VirtualList';
import ri from '@enact/ui/resolution';

interface IProps {
  id: string;
  items: Array<any>;
  onClick?: () => void;
}

export class Playlist extends React.PureComponent<IProps> {
  renderItem = ({index}) => {
    const {items} = this.props;

    return (
      <Item key={index} onClick={this.props.onClick}>
        {items[index].title}
      </Item>
    );
  };

  render() {
    const {id, items} = this.props;

    return (
      <VirtualList
        dataSize={items.length}
        direction="horizontal"
        id={id}
        itemRenderer={this.renderItem}
        itemSize={ri.scale(150)}
        spotlightId={id}
      />
    );
  }
}
