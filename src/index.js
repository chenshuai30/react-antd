import 'babel-polyfill';
import 'core-js/stage';
import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDom from 'react-dom';
import './views/index.less';
import { HashRouter as Router } from 'react-router-dom';
import { createHashHistory } from 'history';
import App from './views/index.jsx';

const history = createHashHistory();
// console.log(Router);
ReactDom.render((<Router><App history={history} /></Router>), document.getElementById('root'));
