import React from 'react'

export default React.createClass({

  getInitialState: function () {
    return {
      class: this.props.class,
      id: this.props.id
    }
  },

  updateClass: function (newClass) {
    this.setState({class: newClass})
  },

  render () {
    return (
      <td className={this.state.class} id={this.state.id}></td>
    )
  }
})
