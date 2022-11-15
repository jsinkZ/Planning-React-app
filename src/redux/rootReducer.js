import { combineReducers } from 'redux'
import { todosReducer } from './todosReducer'
import { categoriesReducer } from './categoriesReducer'

export const rootReducer = combineReducers({
	todosReducer,
	categoriesReducer,
})
