import React from 'react'
import Cell from './Cell'

export default React.createClass({

  render () {
    let cells = new Array(Number(this.props.width)).fill()
    cells = cells.map((cell, index) => {
      let cellId = `${this.props.id}_${index}`
      return <Cell class='limbo' key={cellId} id={cellId}/>
    })

    return (
      <tr id={this.props.id}>
        {cells}
      </tr>
    )
  }
})
