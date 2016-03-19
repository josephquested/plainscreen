import { expect } from 'chai'
import { shallow, render, mount } from 'enzyme'
import emptyTemplate from '../../src/patterns/empty-template'
import React from 'react'

import Row from '../../src/components/board/Row'

describe('Row', () => {
  it('should generate a row with an id', () => {
    const template = emptyTemplate()
    const props = {
    gameState: template,
    id: 0,
    width: 10,
    key: 0
  }
    const wrapper = render(React.createElement(Row, props))
    expect(wrapper.find('tr')).to.have.length(1)
    expect(wrapper.find('#0')).to.have.length(1)
  })
})
