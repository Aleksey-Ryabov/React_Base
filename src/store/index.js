import {applyMiddleware, combineReducers, createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import chatsReduce from './reducers/chats';
import messageReduce from './reducers/messages';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({
    chatsReduce,
    messageReduce
});

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['messageReduce']
  };


const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer,composeWithDevTools(applyMiddleware(thunk)));

export const persistor = persistStore(store);

export default store;
