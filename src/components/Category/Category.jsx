import React from 'react'

import classes from './Category.module.scss'
import CircleProgress from './CircleProgress'
import timeConverter from '../../utils/convertData'

const Category = ({ name, color, icon, tasksCount, completedCount, lastActivity }) => {
	return (
		<div className={classes.category} style={{ backgroundColor: color }}>
			<h1>
				{icon} {name}
			</h1>
			{/* <p className={classes.categoryLastActivity}> {timeConverter(lastActivity)} </p> */}
			<div className={classes.categoryPlanGroup}>
				<p>
					{completedCount} of {tasksCount}
				</p>
				<CircleProgress variant='determinate' value={(100 * completedCount) / tasksCount} />
			</div>
		</div>
	)
}

export default Category
