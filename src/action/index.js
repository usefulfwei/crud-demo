/**
 * Created by jwdn on 2017/3/30.
 */
import axios from 'axios';
import CONST from '../constants';
import port from '../../config';

const URL = `http://localhost:${port}`;

export function fetchPosts(){
  return async (dispatch) => {
    const posts = await axios.get(`${URL}/posts`)
        .then(res => res.data)
        .catch(err=>{
          console.log(err.message)
          return null;
        })
    dispatch({
      type: CONST.FETCH_POSTS,
      posts
    })
  }
}
export function fetchPost(id){
  return async (dispatch) =>{
    const post = await axios.get(`${URL}/posts/${id}`)
        .then(res => res.data)
        .catch(err => {
          console.log(err.message);
          return null;
        })
    dispatch({
      type: CONST.FETCH_POST,
      post
    })
  }
}

export function createPost(data,router){
  return async (dispatch) => {
    const post = await axios.post(`${URL}/posts/new`,{
      title:data.title,
      content:data.content
    })
        .then(res => res.data)
        .catch(err=>{
          console.log(err.message)
          return null;
        })
    if(post.code == 0){
      router.push('/');
    }
  }
}

export function deletePost(id,router){
    return async (dispatch) => {
      const post = await axios.delete(`${URL}/posts/${id}`)
          .then(response => response.data)
          .catch(err => {
            console.log(err.message);
            return null;
          });
      if (post.code === 0) {
        router.push('/');
      }
    }
}
export function updatePost(data,id,router){
    return async (dispatch) => {
      const post = await axios.post(`${URL}/posts/new/${id}`,{
        title:data.title,
        content:data.content
      })
          .then(res => res.data)
          .catch(err=>{
            console.log(err.message)
            return null;
          })
      if(post.code == 0){
        router.push('/');
      }
    }
}