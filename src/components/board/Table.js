import React from 'react'
import Row from './Row'
import Cell from './Cell'

export default React.createClass({

  generateTable: function () {
    let rows = new Array(Number(this.props.height)).fill()
    rows = rows.map((row, index) => {
      return <Row gameState={this.props.gameState}
      id={index} width={this.props.width}
      key={index}/>
    })

    return (
      <tbody>
        {rows}
      </tbody>
    )
  },

  render () {
    return (
      <table id={this.props.id}>
        {this.generateTable()}
      </table>
    )
  }
})
