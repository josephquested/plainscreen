import React from 'react'
import Row from './Row'
import Cell from './Cell'

export default React.createClass({

  generateTable: function () {
    // const rows = []
    // for (let i = 0; i < this.props.height; i++) {
    //   const cells = []
    //   for (let j = 0; j < this.props.width; j++) {
    //     cells.push(<Cell class='limbo' id={j} key={j}/>)
    //   }
    //   // console.log(cells)
    //   rows.push(<Row id={i} key={i}>{cells}</Row>)
    // }

    // console.log(rows[0].props.children)

    let rows = new Array(Number(this.props.height)).fill('')
    rows = rows.map((row, index) => {
      return <Row id={index} width={this.props.width} key={index}/>
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
