import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import Container from '../js/containers/Cart';
import Store from '../js/stores/cart';

require('../css/common.css');

const store = Store();

render(
    <Provider store={store}>
      <Container />
    </Provider>, document.getElementById('app'));