/**
 * Created by jwdn on 2017/3/30.
 */
import CONST from '../constants'

function postsReducer(state={posts:[],post:{}},action){
  switch (action.type){
    case CONST.FETCH_POSTS:
      return{
          ...state,
        posts:action.posts
      }
    case CONST.FETCH_POST:
      return{
          ...state,
        post:action.post
      }
    default:
      return state;
  }
}

export default postsReducer;