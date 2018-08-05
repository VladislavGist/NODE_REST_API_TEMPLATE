const env = process.env.NODE_ENV || 'development'

function errorHandler(err, req, res, next) {
	res.statusCode = 500
	switch(env) {
		case 'development': {
			console.log('Error:')
			res.setHeader('Content-Type', 'application/json')
			res.end(JSON.stringify(err))
		}
		default:
			res.end('Server error')
	}
}

module.exports = errorHandler