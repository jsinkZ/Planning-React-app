import React from 'react'
import { useSelector } from 'react-redux'

import classes from './Overview.module.scss'
import Category from '../../components/Category/Category'

const Overview = () => {
	const categories = useSelector((state) => state.categoriesReducer.categories)

	return (
		<>
			<h2> Overview</h2>
			<div className={classes.overviewGroup}>
				{categories.length > 0 ? (
					categories.map((category) => (
						<Category
							name={category.name}
							color={category.color}
							icon={category.emojiIcon}
							tasksCount={category.tasksCount}
							completedCount={category.completedCount}
							lastActivity={category.lastActivity}
							key={category.id}
						/>
					))
				) : (
					<p className={classes.nullCategoryList}> Categories list is empty 😴</p>
				)}
			</div>
		</>
	)
}

export default Overview
