import React from 'react'

import TodoEditor from './TodoEditor/TodoEditor'
import TodosMenu from '../../components/TodosMenu/TodosMenu'
import { todos } from '../../assets/js/todos'
import Modal from '../../components/Modal/Modal'

// TODO: Добавить важность todo
// TODO: Добавить сортировку по тегам/важности
// TODO: Добавить создание тега/удаление
// TODO: Сделать модальное окно для подтверждения изменений/добавления тегов
// TODO: Сделать закреп todo
// TODO: Сделать навигацию
// TODO: Перейти на Redux
// TODO: ! ПЕРЕПИСАТЬ MODAL !!!
// TODO: Перейти на использование hover внутри style, а не через state

// ! BUG: При добавлении описания в todo без notes, меняется размер элемента

const Editor = () => {
	const _modalObj = {
		title: '',
		content: '',
		isShow: false,
		isAlert: false,
		callback: () => null,
	}

	const [todoItems, setTodoItems] = React.useState(todos.filter((td) => !td.isCompleted)) // * Todos active @todos array
	const [completedTodos, setCompletedTodos] = React.useState(todos.filter((td) => td.isCompleted)) // * Todos completed @todos array
	const [todoValue, setTodoValue] = React.useState('') // * On edit/create td name @string
	const [todoNotes, setTodoNotes] = React.useState('') // * On edit/create td notes @string
	const [selectedTag, setSelectedTag] = React.useState('') // * On edit/create td tag @tag
	const [selectedTodos, setSelectedTodos] = React.useState([]) // * Selected todos @id array
	const [editingTodo, setEditingTodo] = React.useState(null) // * Current todo @id || null
	const [modalObject, setModalObject] = React.useState(_modalObj)

	const onChangeValue = (event) => setTodoValue(event.target.value)
	const onChangeNotes = (event) => setTodoNotes(event.target.value)
	const onClickSetTag = (tagName) => setSelectedTag(tagName)
	const createId = () => Math.random().toString(16).slice(2)
	const getTodoById = (id) => todos.find((td) => id === td.id)
	const isSelectedAll = selectedTodos.length === todoItems.length && selectedTodos.length !== 0

	const onClickCreateTodo = () => {
		if (editingTodo) {
			const thisTodo = getTodoById(editingTodo)
			thisTodo.name = todoValue
			thisTodo.notes = todoNotes
			thisTodo.tag = selectedTag
		} else {
			if (todoValue !== '') {
				const newTodo = {
					id: createId(),
					name: todoValue,
					notes: todoNotes,
					tag: selectedTag,
				}

				todos.push(newTodo)
				setTodoItems(todos)
			}
		}

		setTodoValue('')
		setTodoNotes('')
		setSelectedTag('')
		setEditingTodo(null)
	}

	const onClickSelectTodo = (todoId) => {
		if (selectedTodos.includes(todoId)) setSelectedTodos(selectedTodos.filter((td) => todoId !== td))
		else setSelectedTodos([...selectedTodos, todoId])
	}

	const onChangeSelectAllTodo = () => {
		if (isSelectedAll) setSelectedTodos([])
		else setSelectedTodos(todoItems.filter((td) => !td.isCompleted).map((td) => td.id))
	}

	const onClickCompleteTodo = (todoId) => {
		const thisTodo = getTodoById(todoId)
		const index = todos.findIndex((td) => todoId === td.id)

		if (completedTodos.includes(thisTodo)) {
			setCompletedTodos(completedTodos.filter((td) => todoId !== td.id))
			setTodoItems([...todoItems, thisTodo])
		} else {
			if (selectedTodos.includes(todoId)) setSelectedTodos(selectedTodos.filter((td) => todoId !== td))

			setCompletedTodos([...completedTodos, thisTodo])
			setTodoItems(todoItems.filter((td) => todoId !== td.id))
		}

		todos[index].isCompleted = !thisTodo.isCompleted
	}

	const onClickCompleteSelectedTodos = (todosIdArray) => {
		const todosArray = todosIdArray.map((td) => todoItems.find((t) => td === t.id))

		todos.filter((td) => todosIdArray.includes(td.id)).map((td) => (td.isCompleted = true))

		setTodoItems(todoItems.filter((td) => !todosArray.includes(td)))
		setCompletedTodos([...completedTodos, ...todosArray])
		setSelectedTodos([])
	}

	const onClickEditTodo = (todoId) => {
		const thisTodo = getTodoById(todoId)

		if (thisTodo.tag) setSelectedTag(thisTodo.tag)

		setEditingTodo(todoId)
		setTodoValue(thisTodo.name)
		setTodoNotes(thisTodo.notes)
	}

	const onClickRemoveTodo = (todoId, isCompleted) => {
		const index = todos.findIndex((td) => todoId === td.id)

		if (isCompleted) setCompletedTodos(completedTodos.filter((td) => todoId !== td.id))
		else {
			if (selectedTodos.includes(todoId)) setSelectedTodos(selectedTodos.filter((td) => td !== todoId))

			setTodoItems(todoItems.filter((td) => todoId !== td.id))
		}

		if (editingTodo === todoId) {
			setTodoValue('')
			setTodoNotes('')
			setSelectedTag('')
			setEditingTodo(null)
		}

		todos.splice(index, 1)
	}

	const onClickRemoveSelectedTodos = (todosIdArray) => {
		const todosArray = todosIdArray.map((td) => todoItems.find((t) => td === t.id))

		setSelectedTodos([])
		setTodoItems(todoItems.filter((td) => !todosArray.includes(td)))

		if (todosIdArray.includes(editingTodo)) {
			setTodoValue('')
			setTodoNotes('')
			setSelectedTag('')
			setEditingTodo(null)
		}

		todosArray.map((td) => todos.splice(td.index, 1))
	}

	const onClickReset = () => {
		setTodoValue('')
		setTodoNotes('')
		setSelectedTag('')
		setEditingTodo(null)
	}

	return (
		<>
			<Modal
				title={modalObject.title}
				content={modalObject.content}
				isOpen={modalObject.isShow}
				callback={modalObject.callback}
			/>
			<TodoEditor
				todoValue={todoValue}
				todoNotes={todoNotes}
				selectedTag={selectedTag}
				editingTodo={editingTodo}
				onChangeValue={onChangeValue}
				onChangeNotes={onChangeNotes}
				onClickSetTag={onClickSetTag}
				onClickCreateTodo={onClickCreateTodo}
				onClickReset={onClickReset}
			/>
			<TodosMenu
				todoItems={todoItems}
				todoNotes={todoNotes}
				selectedTodos={selectedTodos}
				completedTodos={completedTodos}
				isSelectedAll={isSelectedAll}
				onClickSelectTodo={onClickSelectTodo}
				onChangeSelectAllTodo={onChangeSelectAllTodo}
				onClickCompleteTodo={onClickCompleteTodo}
				onClickCompleteSelectedTodos={onClickCompleteSelectedTodos}
				onClickRemoveTodo={onClickRemoveTodo}
				onClickRemoveSelectedTodos={onClickRemoveSelectedTodos}
				onClickEditTodo={onClickEditTodo}
			/>
		</>
	)
}

export default Editor
