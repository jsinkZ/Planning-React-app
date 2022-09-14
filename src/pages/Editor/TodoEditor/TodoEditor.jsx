import React from 'react'
import { IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

import classes from './TodoEditor.module.scss'
import { tags } from '../../../assets/js/tags'
import Modal from '../../../components/Modal/Modal'

const TodoEditor = ({
	todoValue,
	todoNotes,
	selectedTag,
	editingTodo,
	onChangeValue,
	onChangeNotes,
	onClickSetTag,
	onClickCreateTodo,
	onClickReset,
}) => {
	const [hoveredTag, setHoveredTag] = React.useState('')
	const disabledButton = todoValue === ''

	return (
		<div className={classes.todoMenu}>
			<div className={classes.createTodoMenu}>
				<h2> Todo editor </h2>
				<input value={todoValue} onChange={onChangeValue} type='text' placeholder='Todo name' />
				<textarea
					value={todoNotes}
					onChange={onChangeNotes}
					className={classes.inputNotes}
					placeholder='Todo notes'
				></textarea>
				<h4> Tags </h4>
				<div className={classes.tags}>
					{tags.map((tag) => {
						const style = {
							color: hoveredTag === tag.name || selectedTag.name === tag.name ? tag.color : 'black',
							fontWeight: selectedTag.name === tag.name ? '500' : '',
							transition: '0.1s all ease',
						}

						return (
							<div
								onMouseEnter={() => setHoveredTag(tag.name)}
								onMouseLeave={() => setHoveredTag('')}
								onClick={() => onClickSetTag(...tags.filter((tg) => tg.name === tag.name))}
								className={classes.tag}
								key={tag.name}
								style={style}
							>
								<div style={{ backgroundColor: tag.color }} className={classes.tagIcon}></div>
								{tag.name}
							</div>
						)
					})}
					<div onClick={() => onClickSetTag('')} className={`${classes.tag} ${classes.create}`}>
						<div className={classes.tagIcon}></div>
						Create tag
					</div>
					<div onClick={() => onClickSetTag('')} className={`${classes.tag} ${classes.remove}`}>
						<div className={classes.tagIcon}></div>
						Remove tag
					</div>
				</div>
			</div>
			<div className={classes.buttons}>
				<button
					disabled={disabledButton ? true : false}
					onClick={onClickCreateTodo}
					className={`${disabledButton ? classes.butDis : ''}`}
				>
					{editingTodo !== null ? 'Save' : 'Create todo'}
				</button>
				<IconButton disabled={disabledButton ? true : false} className={classes.reset} onClick={onClickReset}>
					<CloseIcon color={disabledButton ? '' : 'error'} className={classes.resetIcon} />
				</IconButton>
			</div>
		</div>
	)
}

export default TodoEditor
