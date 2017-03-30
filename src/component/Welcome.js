import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { fetchPosts } from '../action'

import { formateDate } from '../utils/format'

@connect(store=>({
  posts: store.postsReducer.posts
}),{
  fetchPosts
})

export default class Welcome extends Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchPosts();
  }
  render(){
    let posts = this.props.posts.map((post,index)=>{
      return(
          <li>
            <h3>
              <Link to={`post/${post._id}`}>{post.title}</Link>
              <Link to={`post/new/${post._id}`}>Edit</Link>
            </h3>
            <small>{ formateDate(post.date) }</small>
            <hr/>
            <p>{ post.content }</p>
          </li>
      )
    })
    return(
        <div>
          <ul>
            {posts}
          </ul>
        </div>
    )
  }
}