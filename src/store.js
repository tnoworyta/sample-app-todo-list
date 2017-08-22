import { createStore, combineReducers } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension';

export const addTodo = (text) => ({
  type: 'ADD',
  payload: { id: +new Date(), text }
});

export const removeTodo = (todo) => ({
  type: 'REMOVE',
  payload: todo
});

const initialState = [
  {
  id: 1,
    text: 'Todo 1'
  },
  {
    id: 2,
      text: 'Todo 2'
    }
]

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {

  case 'ADD':
    return [ ...state, action.payload ];

  case 'REMOVE':
    return state.filter(todo => todo.id !== action.payload.id );

  default:
    return state;
  }
};

const store = createStore(
  combineReducers({ todos: todosReducer }),
  devToolsEnhancer(),
)

export default store;
