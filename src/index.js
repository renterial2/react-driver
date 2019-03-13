import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import './index.css';
import Game from './containers/Game';
import reducer from './reducers'
import * as serviceWorker from './serviceWorker';


/* eslint-disable no-underscore-dangle */
const store = createStore(
    reducer,
    window._REDUX_DEVTOOLS_EXTENSION_&& window._REDUX_DEVTOOLS_EXTENSION_
)
/* eslint-enable */

ReactDOM.render(
    <Provider store={store}>
        <Game />
    </Provider>,
    document.getElementById('root')
);

serviceWorker.register()