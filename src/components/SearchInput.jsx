import React from 'react'
import { InputBase } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'

const SearchInput = ({ style }) => {
	return (
		<div style={style}>
			<IconButton sx={{ p: '10px' }} type='button'>
				<SearchIcon />
			</IconButton>
			<InputBase sx={{ width: '100%', p: '5px' }} placeholder='Search' />
		</div>
	)
}

export default SearchInput
