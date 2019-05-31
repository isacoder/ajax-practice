import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
//import axios from 'axios';
import './Blog.css';
import Posts from './Posts/Posts';
//import NewPost from'./NewPost/NewPost';
import asyncComponent from '../../hoc/asyncComponent';

const AsyncNewPost = asyncComponent( () => {
    return import('./NewPost/NewPost')
} );

class Blog extends Component {
  state = {
    auth: true
  }
  render () {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li><NavLink
                  to="/posts/"
                    exact
                    activeClassName= 'my-active'
                    activeStyle= {{color:'#bbb'}}
                    >Posts</NavLink></li>
              <li><NavLink to={{
                  pathname: '/new-post',
                  hash: '#submit',
                  search: '?quick-submit=true'
              }}>New Post</NavLink></li>
            </ul>
          </nav>
        </header>
        <Switch>
          {this.state.auth ? <Route path="/new-post" component={AsyncNewPost}/> : null}
          <Route path="/posts/" component={Posts}/>
          {/* <Redirect from="/" to="/posts"/> */}
          <Route render={() => <h1> 404: Not Found</h1>} />
        </Switch>
      </div>
    );
  }
}

export default Blog;
