import React from 'react'

import Box from '@mui/material/Box'
import CircularProgress, { circularProgressClasses } from '@mui/material/CircularProgress'

const CircleProgress = (props) => {
	return (
		<Box sx={{ position: 'relative' }}>
			<CircularProgress
				variant='determinate'
				sx={{
					color: 'rgba(255, 255, 255, 0.4)',
				}}
				size={40}
				thickness={5}
				{...props}
				value={100}
			/>
			<CircularProgress
				variant='indeterminate'
				disableShrink
				sx={{
					color: 'white',
					animationDuration: '550ms',
					position: 'absolute',
					left: 0,
					[`& .${circularProgressClasses.circle}`]: {
						strokeLinecap: 'round',
					},
				}}
				size={40}
				thickness={5}
				{...props}
			/>
		</Box>
	)
}

export default CircleProgress
