
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {gamesReducer, SearchReducer } from './reducers'

// DefaultState
export const defaultGamesState = {
    pokemon: 20,
}
export const initialStateSearch = {
    loading: false,
    pokemon: [],
    error: ''
}

// Store
const rootReducers = combineReducers({
    games: gamesReducer,
    seeker: SearchReducer
})



// copiar esta linea si no se instalo redux devtools
const store = createStore(rootReducers, applyMiddleware(thunk)
)

export default store;