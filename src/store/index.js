import {createStore} from 'redux';
import todoReduce from './todo';
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(todoReduce, composeWithDevTools());
