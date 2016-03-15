import React from 'react'
import Cell from './Cell'

export default React.createClass({
  render () {

    let cells = new Array(Number(this.props.width)).fill('')
    cells = cells.map((cell, index) => {
      return <Cell class='limbo' key={index} id={index}/>
    })

    return (
      <tr id={this.props.id}>
        {cells}
      </tr>
    )
  }
})
