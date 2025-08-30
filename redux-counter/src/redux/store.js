import { configureStore } from '@reduxjs/toolkit';

import  CounterSlice  from './slices/CounterSlice';

// import todosReducer from '../features/todos/todosSlice'
// import filtersReducer from '../features/filters/filtersSlice'
//    todos: todosReducer,
//     filters: filtersReducer,


export const store = configureStore({
  reducer: {
    counter: CounterSlice

  }
});
