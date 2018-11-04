import React, { Component } from 'react'

export default class Postform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        };
    }
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmit = (e) => {
        e.preventDefault();
        const post = {
            ...this.state
        }
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(post)
        })
        .then(res => res.json())
        .then(res => {
            this.props.addPost(res);
        })
    } 
    render() {
    return (
      <div className='container'>
        <div className='row'>
            <div className='col-lg-6'>
                <form className='form-group panel panel-default' onSubmit={this.onSubmit}>
                    <label><h1>Add Comment</h1></label>
                    <div>
                        <label>Title</label><br />
                        <input className='form-control' type='text' name='title' value={this.state.title} onChange={this.onChange} />
                    </div>
                    <div>
                        <label>Body</label><br />
                        <textarea className='form-control' name='body' value={this.state.body} onChange={this.onChange} />
                    </div>
                    <br />
                    <input className='btn btn-success' type='submit' value='Post Content' />
                </form>
            </div>
            <div className='col-lg-6'>
                <div class="panel panel-default">
                    <label><h2>About Module</h2></label>
                    <div class="panel-body">
                        This Module has been developed using just React with Out Redux.
                        We have used fetch methods to call APIs for get and post data;
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
