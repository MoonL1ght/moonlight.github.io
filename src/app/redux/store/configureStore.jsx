import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/rootReducer.jsx';
import middleware from '../middleware/middleware.jsx';

const configureStore = (initialState) => {
  const store = createStore(rootReducer,
    initialState,
    applyMiddleware(middleware));
  return store;
}

export default configureStore;