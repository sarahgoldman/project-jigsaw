module.exports = {
	app: {
		title: 'Project Jigsaw'
	},
	port: process.env.PORT || 3000,
	templateEngine: 'swig',
	assets: {
		lib: {
			css: [
				'public/css/lib/*.css'
			],
			js: [
				'public/js/lib/*.js'
			]
		},
		css: [
			'public/css/*.css'
		],
		js: [
			'public/js/config.js',
			'public/js/application.js',
			'public/js/modules/*/*.js',
			'public/js/modules/*/*[!tests]*/*.js',
			'public/js/modules/*/*[!tests]*/*/*.js'
		],
		tests: []
	}
};
