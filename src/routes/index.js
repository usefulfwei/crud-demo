import React from 'react';
import { Route, IndexRoute } from 'react-router';

import AppContainer from '../component/AppContainer';
import Welcome from '../component/Welcome';
import PostCreate from '../component/PostCreate';
import Post from '../component/Post';

export default (
    <Route path="/" component={AppContainer}>
      <IndexRoute component={Welcome} />
      <Route path="post/new" component={PostCreate}/>
      <Route path="post/new/:id" component={PostCreate}/>
      <Route path="post/:id" component={Post}/>
    </Route>
)