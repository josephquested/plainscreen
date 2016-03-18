import React from 'react'
import Cell from './Cell'

export default React.createClass({
  render () {
    let cells = new Array(Number(this.props.width)).fill()
    cells = cells.map((cell, index) => {
      const cellId = `${this.props.id}_${index}`
      const cellClass = this.props.gameState[this.props.id][index]
      return <Cell class={cellClass} text={cellId} key={cellId}/>
    })

    return (
      <tr id={this.props.id}>
        {cells}
      </tr>
    )
  }
})
