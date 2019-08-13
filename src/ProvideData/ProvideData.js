import React, { Component } from 'react';
import { getLoggedInUser } from '../utils';

/*
  Предоставление данных

  Одна из фозможностей Render-props - предоставление данных
  для обёрнутого компонента

  Нужно написать Render-prop, который передаст авторизованного
  пользователя через проп user

  Вы уже писали такой HOC, теперь реализуйте то же самое при помощи RenderProps

  Чтобы получить текущего пользователя - используйте
  метод `getLoggedInUser` из `utils`

  const user = getLoggedInUser()
*/

export const WithLoggedInUser = class extends Component {
  state = {
    user: getLoggedInUser()
  };

  render() {
    const { user } = this.state;
    const { children } = this.props;

    return children(user);
  }
};
