import { createStore, applyMiddleware, compose } from "redux";
import { authMiddleware, errorMiddleware } from './middleware';
import rootReducer from "./reducer";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [thunk, authMiddleware, errorMiddleware];

const enhancers = [applyMiddleware(...middlewares)];

const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(...enhancers)
);


export default store;
