import { todos } from '../assets/js/todos'
import { CREATE_TODO, CHANGE_TODO, DELETE_TODO } from './types'

const initialState = {
	todos: todos,
}

export const todosReducer = (state = initialState, action) => {
	switch (action.type) {
		case CREATE_TODO:
			return { ...state, todos: [...state.todos, action.data] }
		case CHANGE_TODO:
			return state
		case DELETE_TODO:
			return state
		default:
			return state
	}
}
