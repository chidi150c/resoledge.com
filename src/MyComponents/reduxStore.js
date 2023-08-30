
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers'; // Import your root reducer
import thunkMiddleware from 'redux-thunk'; // Import Redux Thunk middleware

// Define initial state if needed
const initialState = {};

// Define middleware
const middleware = [thunkMiddleware];

// Create the Redux store
const store = createStore(
  rootReducer, // Your root reducer
  initialState,
  applyMiddleware(...middleware)
);

export default store;
