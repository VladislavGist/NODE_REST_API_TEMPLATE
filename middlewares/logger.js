function logger(req, res, next) {
	const env = process.env.NODE_ENV

	if (env !== 'production') {
		console.log(`method: ${ req.method }, url: ${ req.url }, isAuth: ${ req.session.uid ? 'true' : 'false' }`)	
	}
	
	next()
}

module.exports = logger