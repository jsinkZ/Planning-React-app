const timeConverter = (UNIX_timestamp) => {
	const thisDate = new Date(UNIX_timestamp)
	const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
	const year = thisDate.getFullYear()
	const month = months[thisDate.getMonth()]
	const date = thisDate.getDate()
	const hour = thisDate.getHours()
	const min = thisDate.getMinutes()
	const sec = thisDate.getSeconds()

	return `${date} ${month} ${year} ${hour}:${min}:${sec}`
}

export default timeConverter
