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
  render() {
    return (
      <div>
        {this.state.posts.map((d)=> {
          console.log(d);
          return (
            <div key={d.id}>
              <h3 className='title'>Title: {d.title}</h3>
              <div className='description'>Body: {d.body}</div>
            </div>
          )
        })}
        <hr />
      </div>
    )
  }
}
