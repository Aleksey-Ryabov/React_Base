import {combineReducers, createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import chatsReduce from './reducers/chats';
import messageReduce from './reducers/messages';

const allReducers = combineReducers({
    chatsReduce,
    messageReduce
});


export const store = createStore(allReducers,composeWithDevTools());


