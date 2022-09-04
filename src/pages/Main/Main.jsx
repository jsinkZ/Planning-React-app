import React from 'react'

import './Main.module.scss'
import TodoEditor from '../../components/TodoEditor/TodoEditor'
import Todos from '../../components/Todos/Todos'
import { todos } from '../../assets/data/todos'

const Main = () => {
	const [todoValue, setTodoValue] = React.useState('')
	const [todoNotes, setTodoNotes] = React.useState('')
	const [selectedTag, setSelectedTag] = React.useState('')
	const [todoItems, setTodoItems] = React.useState([...todos])

	const onChangeValue = (event) => setTodoValue(event.target.value)
	const onChangeNotes = (event) => setTodoNotes(event.target.value)

	const onClickSetTag = (tagName) => setSelectedTag(tagName)

	const createId = () => Math.random().toString(16).slice(2)

	const onClickCreateTodo = () => {
		if (todoValue !== '') {
			const newTodo = {
				id: createId(),
				name: todoValue,
				notes: todoNotes,
				tag: selectedTag,
			}
			todos.push(newTodo)
			setTodoItems([...todos])

			setTodoValue('')
			setTodoNotes('')
			setSelectedTag('')
		}
	}

	return (
		<main>
			<TodoEditor
				todoValue={todoValue}
				todoNotes={todoNotes}
				selectedTag={selectedTag}
				onChangeValue={onChangeValue}
				onChangeNotes={onChangeNotes}
				onClickSetTag={onClickSetTag}
				onClickCreateTodo={onClickCreateTodo}
			/>
			<Todos todoItems={[...todoItems]} />
		</main>
	)
}

export default Main
