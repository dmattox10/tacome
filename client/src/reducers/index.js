import { CAPABILITIES, GET_RANDOM, GET_FULL, GET_COMPLETE, GET_CUSTOM, POST_FULL, POST_CUSTOM, API_CALL_SUCCESS, API_CALL_FAILURE,CAP_SUCCESS, CAP_FAILURE } from '../actions/types'
// reducer with initial state
const initialState = {
  fetching: true,
  taco: null,
  error: null,
  capabilities: null,
  currentPage: 'Random',
  navLinks: ['Random', 'Custom', 'Full', 'Complete']
}

export function tacoReducer(state = initialState, action) {
  switch (action.type) {
    case CAPABILITIES:
      return { ...state, fetching: true, error: action.error }
    case GET_RANDOM:
      return { ...state, fetching: true, error: action.error }
    case GET_FULL:
      return { ...state, fetching: true, error: action.error }
    case GET_COMPLETE:
      return { ...state, fetching: true, error: action.error }
    case GET_CUSTOM:
      return { ...state, fetching: true, error: action.error }
    case POST_FULL:
      return { ...state, fetching: true, error: action.error }
    case POST_CUSTOM:
      return { ...state, fetching: true, error: action.error }
    case API_CALL_SUCCESS:
      return { ...state, fetching: false, taco: action.taco }
    case API_CALL_FAILURE:
      return { ...state, fetching: false, error: action.error }
    case CAP_SUCCESS:
      return { ...state, fetching: false, capabilities: action.capabilities }
    case CAP_FAILURE:
      return { ...state, fetching: false, errror: action.error }
    default:
      return state
  }
}

