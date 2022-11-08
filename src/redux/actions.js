import { CHANGE_TODO, CREATE_TODO, DELETE_TODO } from './types'

export const createTodo = (todo) => {
	return {
		type: CREATE_TODO,
		data: { ...todo },
	}
}

export const changeTodo = (todo) => {
	return {
		type: CHANGE_TODO,
		data: { ...todo },
	}
}

export const deleteTodo = (todo) => {
	return {
		type: DELETE_TODO,
		data: { ...todo },
	}
}
