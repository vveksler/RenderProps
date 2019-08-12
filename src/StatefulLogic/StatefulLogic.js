import React, { Component } from 'react';
import { getLoggedInUser } from '../utils';

/*
  Render-props можно использовать для вынесения стейтфул логики

  Напишите компонент, который будет добавлять тултип к кнопке.
  Пусть тултип будет обычным `div`

  Пусть на тултипе будет написано "Hello, i'm Tooltip"

  Укажите у тултипа аттрибут `data-testid="tooltip"`

  Кнопка должна получать onClick коллбек из компонента-обёртки
*/

export const WithTooltip = class extends Component {
  state = {
    tooltip: null
  };

  handleClick = () => {
    this.setState({
      tooltip: this.state.tooltip ? null : "Hello, i'm Tooltip"
    });
  };

  render() {
    const { children } = this.props;
    const { tooltip } = this.state;

    return (
      <div>
        {children(this.handleClick)}
        {tooltip && <div data-testid="tooltip">{tooltip}</div>}
      </div>
    );
  }
};
