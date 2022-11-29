// Consulta mediante componentDidMount y fetch a API 

import React, { Component } from 'react'

class Post extends Component {
  constructor(props){
    super(props)
    this.state ={
      posts:[]
    }
  }

  componentDidMount(){
    console.log('final')
    fetch('https://jsonplaceholder.typicode.com/posts').then(res=>res.json())
    .then(res=>this.setState({posts:res}))
  }

  render(){
    console.log('inicio')
    console.log(this.state.posts)
    return(
      <React.Fragment>
        <h1>Llamada a API</h1>
        <span>{this.state.posts.map(post=> <div key={post.title}>{post.id}.- {post.title}</div>)}</span>
      </React.Fragment>
    )
  }
}

export default Post;
