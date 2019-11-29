import React, { Component } from 'react'
import Board from './components/Board/Board.jsx'


class App extends Component {

  render() {
    return (
      <div className='container text-center App'>
        <h1>Найди кольцо</h1>
        <Board/>
      </div>
    )
  }
}

export default App;