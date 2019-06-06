import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const InitialState = {
  user: null,
  records: {
              prevMonthRecord: [],
              lastMonthRecord: [],
              currMonthRecord: [],
           },
  problems: [],
}

export const actionTypes = {
  GETRECORDS: 'GETRECORDS',
  GETPROBLEMS: 'GETPROBLEMS',
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
}

// REDUCERS
export const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case actionTypes.GETRECORDS:
      return Object.assign({}, state, {
        records: action.payload
      })
    case actionTypes.GETPROBLEMS:
      return Object.assign({}, state, {
        problems: action.payload
      })
    case actionTypes.LOGIN:
      return Object.assign({}, state, {
        user: action.payload
      })
    case actionTypes.LOGOUT:
      return Object.assign({}, state, {
        user: null
      })
    default:
      return state
  }
}

// ACTIONS
export const getRecords = (data) => {
  return { type: actionTypes.GETRECORDS, payload: data }
}

export const getProblems = (data) => {
  return { type: actionTypes.GETPROBLEMS, payload: data }
}

export const login = (data) => {
  return { type: actionTypes.LOGIN, payload: data }
}

export const logout = (data) => {
  return { type: actionTypes.LOGOUT }
}

export function initializeStore (initialState = InitialState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware())
  )
}