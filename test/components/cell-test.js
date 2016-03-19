import { expect } from 'chai'
import { shallow, render, mount } from 'enzyme'
import React from 'react'

import Cell from '../../src/components/board/Cell'

describe('Cell', () => {
  it('should generate a cell', () => {
    const props = {
    width: 10,
    class: 'empty',
    key: 0
  }
    const wrapper = shallow(React.createElement(Cell, props))
    expect(wrapper.find('.empty')).to.have.length(1)
    expect(wrapper.find('.full')).to.have.length(0)
  })
})
