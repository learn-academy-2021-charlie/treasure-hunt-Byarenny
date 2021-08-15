import React, { Component } from 'react'
import Square from "./components/Square"
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      board: ["🎃", "🎃", "🎃", "🎃", "🎃", "🎃", "🎃", "🎃", "🎃"],
      candyLocation: null
    }
  }

  componentDidMount = () => {
    let candy = Math.floor(Math.random() * this.state.board.length)
    this.setState({candyLocation: candy})
  }

  handleGamePlay = (index) => {
    const {board} = this.state
    if(index === this.state.candyLocation){
      board[index] = "🍬"
      this.setState({board: board})
    } else if(index !== this.state.candyLocation){
      board[index] = "💩"
      this.setState({board: board})
    } else
    board[index] = "🎃"
    this.setState({board: board})
  }

  render(){
    console.log(this.state.candyLocation)
    return(
      <>
        <h1>Trick or Treat! Candy Hunt Game</h1>
        <div id="gameboard">
        {this.state.board.map((value, index)=> {
        return (
          <Square 
            value={value} 
            key={index} 
            index={index} 
            handleGamePlay={this.handleGamePlay}
            />
        )
        })}
        </div>
      </>
    )
  }
}
export default App
