import React, { Component } from 'react'

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }
  componentWillMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(res => {
      this.setState({
        posts: res
      })
    })
  }
  componentWillReceiveProps(nextProps) {
    const a = [...this.state.posts];
    a.unshift({...nextProps.addPost(), id: this.state.posts.length+1})
    this.setState({
      posts: a
    })
  }
  render() {
    return (
      <div className='container'>
        <h3 style={{textAlign: "left", margin: '10px'}}>Comments</h3>
        {this.state.posts.map((d)=> {
          return (
            <div key={d.id}>
              <div class="panel panel-default">
                <span className='panel-title'>Title: {d.title}</span>
                <span className='panel-body'>Body: {d.body}</span>
              </div>
            </div>
          )
        })}
        <hr />
      </div>
    )
  }
}
