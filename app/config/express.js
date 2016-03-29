var express     = require('express'),
    path        = require('path'),
    config      = require('./config'),
	compress    = require('compression'),
	consolidate = require('consolidate');

module.exports = function() {

    var app = express()

    // Setting application local variables
    app.locals.title = config.app.title;
    app.locals.jsFiles = config.getJavaScriptAssets();
    app.locals.cssFiles = config.getCSSAssets();

    // Passing the request url to environment locals
    app.use(function(req, res, next) {
    	res.locals.url = req.protocol + '://' + req.headers.host + req.url;
    	next();
    });

    // Should be placed before express.static
    app.use(compress({
    	filter: function(req, res) {
    		return (/json|text|javascript|css/).test(res.getHeader('Content-Type'));
    	},
    	level: 9
    }));

    // Set swig as the template engine
    app.engine('server.view.html', 'swig');

    // Set views path and view engine
    app.set('view engine', 'server.view.html');
    app.set('views', './app/views');

    // Setting the app router and static folder
    app.use(express.static(path.resolve('./public')));

    // Globbing routing files
	config.getGlobbedFiles('./app/routes/**/*.js').forEach(function(routePath) {
		require(path.resolve(routePath))(app);
	});

    // Return Express server instance
	return app;
};
