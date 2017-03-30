/**
 * Created by jwdn on 2017/3/30.
 */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

export default function configureStore() {
  const store = createStore(
      rootReducer,
      applyMiddleware(thunk)
  );
  return store;
}