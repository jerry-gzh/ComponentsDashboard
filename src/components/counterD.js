// Contador con función declarada y bind 
import React, { Component } from 'react'

class CounterD extends Component{
  constructor(props){
    super(props)
    this.state = {
      counter: 1 
    }
    this.incrementCounter = this.incrementCounter.bind(this)
    this.decrementCounter = this.decrementCounter.bind(this)
  }

  incrementCounter(){
    this.setState({counter: this.state.counter + 1})
  }

  decrementCounter(){
    this.setState({counter: this.state.counter -1})
  }


  render(){
    return (
      <React.Fragment>
        <h3>Contador FnDeclarada</h3>
        <div>
          <button
            type='button'
            onClick={this.decrementCounter}> -
          </button>
          <span>{this.state.counter} </span>
          <button
            type='button'
            onClick={this.incrementCounter}> +
          </button>
        </div>
      </React.Fragment>
    )
  }
}
export default CounterD;