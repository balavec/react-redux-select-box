import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"
import _ from 'lodash'

import App from './components/App'
import store from "./store"

import '../scss/style.scss';

const app = document.getElementById('app');
ReactDOM.render(<Provider store={store}><App /></Provider>, app);
