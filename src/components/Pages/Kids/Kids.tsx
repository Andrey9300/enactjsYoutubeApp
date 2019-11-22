import React from 'react';
import {connect} from 'react-redux';

import {kidsSerialsStart} from '../../../modules/kidsSerials/kidsSerials.actions';
import {CollectionKidsSerials} from '../../Collections/KidsSerials/KidsSerials';
import {IStore} from '../../../reducers';
import {serialIds} from '../../../modules/kidsSerials/kidsSerials.constants';

interface IStateProps {
  kidsSerial: any;
  videos: any;
}

interface IDispatchProps {
  kidsSerialsStart: typeof kidsSerialsStart;
}

interface IProps extends IStateProps, IDispatchProps {}

export class KidsComponent extends React.PureComponent<IProps> {
  componentDidMount(): void {
    const {kidsSerialsStart} = this.props;

    kidsSerialsStart({serialsIds: serialIds});
  }

  render() {
    const {kidsSerial, videos} = this.props;

    return <CollectionKidsSerials kidsSerial={kidsSerial} videos={videos} />;
  }
}

const mapStateToProps = (store: IStore): IStateProps => {
  const {
    kidsSerialReducer: {kidsSerial},
    videosReducer: {videos},
  } = store;

  return {
    kidsSerial,
    videos,
  };
};

const mapDispatchToProps: IDispatchProps = {
  kidsSerialsStart,
};

export const Kids = connect(mapStateToProps, mapDispatchToProps)(KidsComponent);
