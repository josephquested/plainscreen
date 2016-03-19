import { expect } from 'chai'
import { shallow, render, mount } from 'enzyme'
import emptyTemplate from '../../src/patterns/empty-template'
import React from 'react'

import Table from '../../src/components/board/Table'

describe('Table', () => {
  it('should have a rows and cells', () => {
    const template = emptyTemplate()
    const props = { id: 'table',
     gameState: template,
     height: 20, width: 30}
    const wrapper = render(React.createElement(Table, props))
    expect(wrapper.find('#table')).to.have.length(1)
    expect(wrapper.find('tr')).to.have.length(props.height)
    expect(wrapper.find('td')).to.have.length(props.height * props.width)
  })
})
