import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const InitialState = {
  user: null,
}

export const actionTypes = {
  GETCOINPRICE: 'GETCOINPRICE',
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
}

// REDUCERS
export const reducer = (state = InitialState, action) => {
  switch (action.type) {
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