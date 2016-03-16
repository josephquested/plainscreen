import React from 'react'

export default React.createClass({

  getInitialState: function () {
    return {
      class: this.props.class,
    }
  },

  setNewClass: function (newClass) {
    this.setState({class: newClass})
  },

  render () {
    return (
      <td
      onClick={() => this.setNewClass('full')} className={this.state.class}></td>
    )
  }
})
