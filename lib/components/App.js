import React from 'react'
import Header from './Header.js'
import Table from './board/Table.js'

export default React.createClass({
  render () {
    return (
      <div className='app'>
        <Header header='plainscreen'/>
        <Table id='table' height='20' width='40' />
      </div>
    )
  }
})
