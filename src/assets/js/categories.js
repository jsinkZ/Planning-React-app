import { todos } from './todos'

const countTasks = (name) => todos.filter((item) => item.tag.name === name).length
const countCompletedTasks = (name) =>
	todos.filter((item) => item.tag.name === name && item.isCompleted).length

export const categories = [
	{
		id: 1,
		name: 'Home',
		color: '#79D48F',
		emojiIcon: '🏠',
		lastActivity: new Date(),
		tasksCount: countTasks('Home'),
		completedCount: countCompletedTasks('Home'),
	},
	{
		id: 2,
		name: 'Work',
		color: '#66AAED',
		emojiIcon: '🏛️',
		lastActivity: new Date(),
		tasksCount: countTasks('Work'),
		completedCount: countCompletedTasks('Work'),
	},
	{
		id: 3,
		name: 'Study',
		color: '#E28B56',
		emojiIcon: '🎓',
		lastActivity: new Date(),
		tasksCount: countTasks('Study'),
		completedCount: countCompletedTasks('Study'),
	},
]
