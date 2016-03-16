import { createStore } from 'redux'

const history = (state = [], action) => {
  switch (action.type) {
    case 'SCROLL':
      return [state]
    case 'MOVE':
      return [state]
    default:
      return state
  }
}



/*
const state = [
  ['empty', 'empty', 'full', 'full', 'empty'],
  ['full', 'empty', 'empty', 'empty', 'empty'],
  ['empty', 'player', 'full', 'full', 'empty'],
  ['full', 'full', 'full', 'full', 'full']
]
