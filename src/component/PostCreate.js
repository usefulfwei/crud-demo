import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { updatePost, createPost } from '../action'


@connect(store=>({
  post: store.postsReducer.post
}),{
  updatePost,createPost
})

export default class PostCreate extends Component{
  constructor(props){
    super(props)
    this.state = {
      title: '',
      content: '',
      isEdit:false
    }
  }

  static contextTypes = {
    router: PropTypes.object
  }

  componentDidMount(){
    let id = this.props.params.id;
    if(!id) return;

    this.setState({
      isEdit:true
    })
  }
  componentWillReceiveProps(nextProps){
    const { title,content } = nextProps.post;
    this.setState({
      title,
      content
    })
  }

  handleSubmit(e){
    e.preventDefault();
    const { title, content,isEdit } = this.state;

    if(!title.trim()) return;
    if(!content.trim()) return;

    const data = {title,content},
        router = this.context.router;

    if(isEdit){
      this.props.updatePost(data,this.props.params.id,router)
    }else{
      this.props.createPost(data,router);
    }
  }
  handleChange(state,e){
    this.setState({
      [state]:e.target.value
    })
  }
  render(){
    const { title,content, isEdit } = this.state;

    return(
        <div>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div>
              <label>Title</label>
              <input type="text" value={this.state.title} onChange={this.handleChange.bind(this, 'title')}/>
            </div>
            <div>
              <label>Content</label>
              <textarea rows="10" type="text" value={this.state.content} onChange={this.handleChange.bind(this, 'content')}/>
            </div>
            <button onClick={this.handleSubmit.bind(this)}>{isEdit ? 'update':'submit'}</button>
          </form>
        </div>
    )
  }
}