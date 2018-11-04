import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Post from './components/Post'
import PostForm from './components/Postform'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newPost: {}
    }
  }
  addNewPost = (data) => {
    this.setState({
      newPost: data
    })
  }
  shouldComponentUpdate(previous, nextState) {
    if(this.state.newPost !== nextState.newPost) {
      this.setState({
        newPost: nextState.newPost
      });
      return true;
    } else return false;
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <PostForm addPost={this.addNewPost} />
        <hr />
        <Post addPost={() => this.state.newPost} />
      </div>
    );
  }
}

export default App;
