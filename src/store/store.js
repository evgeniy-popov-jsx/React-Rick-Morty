import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import favoriteReducer from './reducers/favoriteReducer';

import { setLocalStorage } from '../utils/localStorage';

const store = configureStore({
    reducer: {
        favoriteReducer,
    }
}, composeWithDevTools(applyMiddleware(thunk)));

store.subscribe(()=>{
    setLocalStorage('store', store.getState().favoriteReducer)
});

export default store;