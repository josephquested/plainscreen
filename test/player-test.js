import test from 'ava'
import React from 'react'
import { spy } from 'sinon'
import { shallow, render, mount } from 'enzyme'

// components
import Table from '../lib/components/board/Table'
import generatePlayer from '../lib/player/spawn-player'

// header //
test('spawnPlayer can spawn a player on the screen', t => {
  const expected = 'plainscreen'
  const props = { header: 'plainscreen' }
  const wrapper = shallow(React.createElement(Header, props))
  t.same(wrapper.find('h1').text(), expected)
})
