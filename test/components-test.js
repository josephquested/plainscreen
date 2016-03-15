import test from 'ava'
import React from 'react'
import { spy } from 'sinon'
import { shallow, render, mount } from 'enzyme'

// components //
import Header from '../lib/components/Header'
import Table from '../lib/components/board/Table.js'
import Row from '../lib/components/board/Row.js'
import Cell from '../lib/components/board/Cell.js'

// header //
test('<Header/> renders page title text', t => {
  const expected = 'plainscreen'
  const props = { header: 'plainscreen' }
  const wrapper = shallow(React.createElement(Header, props))
  t.same(wrapper.find('h1').text(), expected)
})


// row //
test('<Row/> generates a row with an id', t => {
  const props = { id: 'testId'}
  const wrapper = shallow(React.createElement(Row, props))
  t.ok(wrapper.find('#testId').length > 0)
})

// cell //
test('<Cell/> generates a td; gives it a class/id', t => {
  const props = { class: 'testClass', id: 'testId'}
  const wrapper = shallow(React.createElement(Cell, props))
  t.ok(wrapper.find('td').hasClass('testClass'))
  console.log(wrapper.find('td').length)
  t.ok(wrapper.find('#testId').length > 0)
})

// table //
test('<Table/> generates a table based on height/width props', t => {
  const props = { id: 'testId', height: 20, width: 30}
  const wrapper = render(React.createElement(Table, props))
  t.ok(wrapper.find('#testId').length > 0)
  t.same(wrapper.find('tr').length, props.height)
  t.same(wrapper.find('td').length, props.height * props.width)
})
