import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import TodoEditor from './TodoEditor/TodoEditor'
import TodosMenu from '../../components/TodosMenu/TodosMenu'
import { todos } from '../../assets/js/todos'
import Modal from '../../components/Modal/Modal'

// TODO: Написать хук useModal
// TODO: Добавить важность todo
// TODO: Добавить сортировку по тегам/важности
// TODO: Добавить создание тега/удаление
// TODO: Сделать закреп todo
// TODO: Сделать навигацию

const Editor = () => {
	const dispatch = useDispatch()
	const todosRedux = useSelector((state) => state.todosReducer.todos)

	// Новые todos на редаксе
	console.log(todosRedux)
	const notCompletedTodosRedux = todosRedux.filter((todo) => !todo.isCompleted)
	const completedTodosRedux = todosRedux.filter((todo) => todo.isCompleted)

	const [todoValue, setTodoValue] = React.useState('') // * On edit/create td name @string
	const [todoNotes, setTodoNotes] = React.useState('') // * On edit/create td notes @string
	const [selectedTag, setSelectedTag] = React.useState('') // * On edit/create td tag @tag
	const [editingTodo, setEditingTodo] = React.useState(null) // * Current todo @id || null
	const [displayModal, setDisplayModal] = React.useState(false) // * Display for modal boolean
	const [modalData, setModalData] = React.useState([])

	console.log(todosRedux)

	const onChangeValue = (event) => setTodoValue(event.target.value)
	const onChangeNotes = (event) => setTodoNotes(event.target.value)
	const onClickSetTag = (tagName) => setSelectedTag(tagName)
	const createId = () => Math.random().toString(16).slice(2)
	const getTodoById = (id) => todos.find((td) => id === td.id)

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
					isCompleted: false,
				}

				todos.push(newTodo)
			}
		}

		setTodoValue('')
		setTodoNotes('')
		setSelectedTag('')
		setEditingTodo(null)
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
				title={modalData[0]}
				content={modalData[1]}
				callback={modalData[2]}
				isDisplay={displayModal}
				setDisplayModal={setDisplayModal}
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
			<TodosMenu />
		</>
	)
}

export default Editor
