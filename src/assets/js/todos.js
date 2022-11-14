import { tags } from './tags'

export const todos = [
	{
		id: 1,
		name: 'Clear bedroom',
		notes: 'Clear the room, sort out the shelving',
		tag: tags[0],
		isCompleted: false,
	},
	{
		id: 2,
		name: 'Make a procurement plan',
		notes: '',
		tag: tags[1],
		isCompleted: false,
	},
	{
		id: 3,
		name: 'Math homework',
		notes: 'Par. 13, Ex. 1-3 & Par.14, Ex. 5',
		tag: tags[2],
		isCompleted: false,
	},
	{
		id: 4,
		name: '😴 Just chill',
		notes: ':P Z-Z-Z-Z',
		tag: tags[2],
		isCompleted: true,
	},
	{
		id: 5,
		name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
		notes: 'Max letters for good display: 34',
		tag: tags[0],
		isCompleted: false,
	},
	{
		id: 6,
		name: 'Deploy project',
		tag: tags[1],
		isCompleted: true,
	},
	{
		id: 7,
		name: 'Do some',
		tag: tags[2],
		isCompleted: false,
	},
]
