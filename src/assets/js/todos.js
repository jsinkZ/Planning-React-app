import { tags } from './tags'

export const todos = [
	{
		id: 1,
		name: 'Clear bedroom',
		notes: 'Clear the room, sort out the shelving',
		tag: tags[0],
		isDone: false,
	},
	{
		id: 2,
		name: 'Make a procurement plan',
		notes: '',
		tag: tags[1],
		isDone: false,
	},
	{
		id: 3,
		name: 'Homework',
		notes: 'Par. 13, Ex. 1-3 & Par.14, Ex. 5',
		tag: tags[2],
		isDone: false,
	},
	{
		id: 4,
		name: '😴 Just chill',
		notes: ':P Z-Z-Z-Z',
		isDone: true,
	},
	{
		id: 5,
		name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
		notes: 'Max letters for good display: 34',
		isDone: false,
	},
]
