import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchPost,deletePost } from '../action';

import { formateDate } from '../utils/format'

@connect(store => ({
  post:store.postsReducer.post
}),{
  fetchPost,deletePost
})

export default class Post extends Component{
  static contextTypes = {
    router: PropTypes.object
  }
  componentDidMount(){
    this.props.fetchPost(this.props.params.id);
  }
  handleDelete(){
    this.props.deletePost(this.props.params.id,this.context.router)
  }
  render(){
    const { title, date, content, _id } = this.props.post;
    return(
        <div>
          <h2>{title}</h2>
          <p>{formateDate(date)}</p>
          <hr/>
          <p>{content}</p>
          <hr/>
          <Link to="/">Return</Link>
          <button onClick={this.handleDelete.bind(this)}>Delete</button>
          <Link to={`post/new/${_id}`}>Edit</Link>
        </div>
    )
  }
}