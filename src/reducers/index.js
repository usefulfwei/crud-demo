/**
 * Created by jwdn on 2017/3/30.
 */
import { combineReducers } from 'redux';
import postsReducer from './posts';

const rootReducer = combineReducers({
  postsReducer
})

export default rootReducer;