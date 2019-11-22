import InitialState from './initialState'
import { SET_VERSION } from '../types'

const initialState = new InitialState()

export default function globalReducer(state = initialState, action) {
    if (!(state instanceof InitialState)) return initialState.merge(state)
    switch (action.type) {
        case SET_VERSION: {
            return state.set('version', action.payload)
        }
    }
    return state
}
