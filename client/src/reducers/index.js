import { combineReducers } from 'redux';
import { CAPABILITIES, GET_RANDOM, GET_FULL, GET_COMPLETE, GET_CUSTOM, POST_FULL, POST_CUSTOM } from '../actions/types'

// reducer with initial state
const initialState = {
  fetching: false,
  taco: null,
  error: null,
  capabilities: null,
  currentPage: 'Random',
  navLinks: ['Random, Custom, Full, Complete']
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case CAPABILITIES:
      return { ...state, fetching: true, error: action.error, capabilities: action.capabilities }
    case GET_RANDOM:
      return { ...state, fetching: true, taco: action.taco, error: action.error }
    case GET_FULL:
      return { ...state, fetching: true, taco: action.taco, error: action.error }
    case GET_COMPLETE:
      return { ...state, fetching: true, taco: action.taco, error: action.error }
    case GET_CUSTOM:
      return { ...state, fetching: true, taco: action.taco, error: action.error }
    case POST_FULL:
      return { ...state, fetching: true, taco: action.taco, error: action.error }
    case POST_CUSTOM:
      return { ...state, fetching: true, taco: action.taco, error: action.error }
    default:
      return state
  }
}