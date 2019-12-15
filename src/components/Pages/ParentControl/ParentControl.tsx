import React from 'react';
import {connect} from 'react-redux';
import {Header, Panel} from '@enact/moonstone/Panels';

import {
  Wrapper,
  WrapperIncrementSlider,
  Age,
  Timer,
  WrapperControls,
  WrapperBackArrow,
} from './ParentControlStyles';
import {
  IParentSettings,
  setParentSettings,
} from '../../../modules/parentSettings/parentSettings.actions';
import BackArrow from '../../Icons/BackArrow/BackArrow.svg';
import {SubmitButton} from '../../UiElements/SubmitButton/SubmitButton';
import {setRoute} from '../../../modules/routes/routes.actions';

interface IStateProps {
  parentSettings: IParentSettings;
}

interface IDispatchProps {
  setParentSettings: typeof setParentSettings;
  setRoute: typeof setRoute;
}

interface IProps extends IStateProps, IDispatchProps {}

interface IState {
  age: number;
  timer: number;
}

export class ParentControlComponent extends React.PureComponent<IProps> {
  public state: IState = {
    age: null,
    timer: null,
  };

  constructor(props) {
    super(props);

    const {
      parentSettings: {age, timer},
    } = this.props;

    this.state = {age, timer};
  }

  private onClickBack = () => {
    const {setRoute} = this.props;

    setRoute('kids');
  };

  private changeAge = (event) => {
    const {value} = event;

    this.setState({age: value});
  };

  private changeTimer = (event) => {
    const {value} = event;

    this.setState({timer: value});
  };

  private saveSettings = () => {
    const {setParentSettings, setRoute} = this.props;
    const {age, timer} = this.state;

    setParentSettings({age, timer});
    setRoute('kids');
  };

  render() {
    const {age, timer} = this.state;

    return (
      <Panel>
        <Header hideLine={true} centered={true}>
          <title>Родительские настройки</title>
        </Header>
        <WrapperBackArrow onClick={this.onClickBack} />
        <Wrapper>
          <WrapperControls>
            <Age>Возраст {age} лет</Age>
            <WrapperIncrementSlider
              onChange={this.changeAge}
              decrementIcon="minus"
              defaultValue={age}
              incrementIcon="plus"
              knobStep={1}
              min={0}
              max={12}
              step={1}
            />
          </WrapperControls>
          <WrapperControls>
            <Timer>Таймер {timer} минут</Timer>
            <WrapperIncrementSlider
              onChange={this.changeTimer}
              decrementIcon="minus"
              defaultValue={timer}
              incrementIcon="plus"
              knobStep={5}
              min={5}
              max={120}
              step={5}
            />
          </WrapperControls>
        </Wrapper>
        <Wrapper>
          <SubmitButton text="Сохранить" onClick={this.saveSettings} />
        </Wrapper>
      </Panel>
    );
  }
}

const mapStateToProps = ({
  parentSettingsReducer: {parentSettings},
}): IStateProps => ({
  parentSettings,
});

const mapDispatchToProps: IDispatchProps = {
  setParentSettings,
  setRoute,
};

export const ParentControl = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ParentControlComponent);
