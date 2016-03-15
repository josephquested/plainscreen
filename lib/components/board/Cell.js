import React from 'react'

export default React.createClass({

  render () {
    return (
      <td className={this.props.class} id={this.props.id}></td>
    )
  }
})
