import React from 'react';
import {connect} from 'react-redux';

import {Layout, Cell} from '@enact/ui/Layout';
import {Wrapper, NumberButton, NumberButtonCheck} from './CheckCodeStyles';
import {NumberHelper} from '../../../utils/number';
import {setCodeChecked} from '../../../modules/parentSettings/parentSettings.actions';

interface IDispatchProps {
  setCodeChecked: typeof setCodeChecked;
}

interface IProps extends IDispatchProps {}

interface IState {
  inputNumbers: number[];
  showInputNumbers: number[];
  numberAnswers: number[];
}

const numbers = [
  'ноль',
  'один',
  'два',
  'три',
  'четыре',
  'пять',
  'шесть',
  'семь',
  'восемь',
  'девять',
];

class CheckCodeComponent extends React.PureComponent<IProps> {
  private codeLength = 3;

  public state: IState = {
    inputNumbers: [],
    showInputNumbers: [],
    numberAnswers: [],
  };

  public componentDidMount() {
    this.generateNumbers();
  }

  public componentDidUpdate(
    prevProps: Readonly<IProps>,
    prevState: Readonly<IState>,
  ) {
    const {setCodeChecked} = this.props;
    const {inputNumbers, numberAnswers} = this.state;

    if (
      numberAnswers.every((number, index) => number === inputNumbers[index])
    ) {
      setCodeChecked(true);
    }
  }

  private generateNumbers = () => {
    const numberAnswers = [];

    for (let i = 0; i < 3; i++) {
      numberAnswers.push(numbers[NumberHelper.getRandomInt(0, 10)]);
    }

    this.setState({numberAnswers});
  };

  private clickNumber = (event) => {
    const {inputNumbers, showInputNumbers} = this.state;

    if (!event || !event.target || inputNumbers.length >= this.codeLength) {
      return;
    }

    this.setState({
      inputNumbers: [...inputNumbers, event.target.getAttribute('value')],
      showInputNumbers: [
        ...showInputNumbers,
        event.target.getAttribute('data-numeric'),
      ],
    });
  };

  private clearAnswer = () => {
    this.setState({inputNumbers: [], showInputNumbers: []});
  };

  private clearNumber = () => {
    const {inputNumbers, showInputNumbers} = this.state;
    const newInputNumber = inputNumbers.slice(0, inputNumbers.length - 1);
    const newShowInputNumbers = showInputNumbers.slice(
      0,
      showInputNumbers.length - 1,
    );

    this.setState({
      inputNumbers: newInputNumber,
      showInputNumbers: newShowInputNumbers,
    });
  };

  render() {
    const {showInputNumbers, numberAnswers} = this.state;

    return (
      <Wrapper>
        <Layout className="layout">
          <Cell shrink>Введите цифры: {numberAnswers.join(', ')}</Cell>
        </Layout>
        <Layout className="layout">
          <Cell shrink>
            <NumberButtonCheck>{showInputNumbers[0]}</NumberButtonCheck>
          </Cell>
          <Cell shrink>
            <NumberButtonCheck>{showInputNumbers[1]}</NumberButtonCheck>
          </Cell>
          <Cell shrink>
            <NumberButtonCheck>{showInputNumbers[2]}</NumberButtonCheck>
          </Cell>
        </Layout>
        <Layout className="layout">
          <Cell shrink>
            <NumberButton
              value={numbers[1]}
              data-numeric={1}
              onClick={this.clickNumber}
            >
              1
            </NumberButton>
          </Cell>
          <Cell shrink>
            <NumberButton
              value={numbers[2]}
              data-numeric={2}
              onClick={this.clickNumber}
            >
              2
            </NumberButton>
          </Cell>
          <Cell shrink>
            <NumberButton
              value={numbers[3]}
              data-numeric={3}
              onClick={this.clickNumber}
            >
              3
            </NumberButton>
          </Cell>
        </Layout>
        <Layout className="layout">
          <Cell shrink>
            <NumberButton
              value={numbers[4]}
              data-numeric={4}
              onClick={this.clickNumber}
            >
              4
            </NumberButton>
          </Cell>
          <Cell shrink>
            <NumberButton
              value={numbers[5]}
              data-numeric={5}
              onClick={this.clickNumber}
            >
              5
            </NumberButton>
          </Cell>
          <Cell shrink>
            <NumberButton
              value={numbers[6]}
              data-numeric={6}
              onClick={this.clickNumber}
            >
              6
            </NumberButton>
          </Cell>
        </Layout>
        <Layout className="layout">
          <Cell shrink>
            <NumberButton
              value={numbers[7]}
              data-numeric={7}
              onClick={this.clickNumber}
            >
              7
            </NumberButton>
          </Cell>
          <Cell shrink>
            <NumberButton
              value={numbers[8]}
              data-numeric={8}
              onClick={this.clickNumber}
            >
              8
            </NumberButton>
          </Cell>
          <Cell shrink>
            <NumberButton
              value={numbers[9]}
              data-numeric={9}
              onClick={this.clickNumber}
            >
              9
            </NumberButton>
          </Cell>
        </Layout>
        <Layout className="layout">
          <Cell shrink>
            <NumberButton onClick={this.clearAnswer}>очистить</NumberButton>
          </Cell>
          <Cell shrink>
            <NumberButton
              value={numbers[0]}
              data-numeric={0}
              onClick={this.clickNumber}
            >
              0
            </NumberButton>
          </Cell>
          <Cell shrink>
            <NumberButton onClick={this.clearNumber}>x</NumberButton>
          </Cell>
        </Layout>
      </Wrapper>
    );
  }
}

const mapDispatchToProps: IDispatchProps = {
  setCodeChecked,
};

export const CheckCode = connect(null, mapDispatchToProps)(CheckCodeComponent);
