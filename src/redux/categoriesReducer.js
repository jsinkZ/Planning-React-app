import { categories } from '../assets/js/categories'
import { CREATE_CATEGORY, CHANGE_CATEGORY, DELETE_CATEGORY } from './types'

const initialState = {
	categories,
}

export const categoriesReducer = (state = initialState, action) => {
	switch (action.type) {
		case CREATE_CATEGORY:
			return { ...state, categories: [...categories, action.data] }
		case CHANGE_CATEGORY:
			const { data } = action
			const categoryIndex = categories.findIndex((category) => category.id === data.id)
			const nextCategories = [
				...categories.slice(0, categoryIndex),
				action.data,
				...categories.slice(categoryIndex + 1),
			]

			return { ...state, categories: nextCategories }
		case DELETE_CATEGORY:
			return (() => {
				const { data } = action
				const nextCategories = categories.filter((category) => category.id !== data.id)
				return { ...state, categories: nextCategories }
			})()

		default:
			return state
	}
}
