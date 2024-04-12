// although createStore is depricated so here we can use react toolkit, but in assign mention that we need to use action reducers specifically

import { createStore, combineReducers } from 'redux';
import todoReducers from './reducers/toDoReducer';

const store = createStore(
    // if there is multiple reducers we can assign all reducers here in obj format or create another module and define there also
    combineReducers({
        todoReducers
    })
  );

export default store;