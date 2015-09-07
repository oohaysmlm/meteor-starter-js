Package.describe({
  summary: "Adds favoriting/liking functionality to any collection",
  version: "0.0.4",
  git: "http://github.com/yogiben/meteor-favorites.git"
});

both = ['client','server']

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.0');

  api.use(
  	[
  		'coffeescript',
  		'less',
      'templating',

	    'aldeed:autoform@4.0.2 || 5.1.2'

  	],
  	both);

  api.addFiles(
  	[
  		'lib/both/collections.js'
  	],
  	both)

   api.addFiles(
  	[
  		'lib/client/templates.html',
      'lib/client/templates.js',
  		'lib/client/helpers.js'
  	],
  	'client')

   api.addFiles(
  	[
  		'lib/server/allow.js',
  		'lib/server/publish.js'
  	],
  	'server')



});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('yogiben:favorites');
  api.addFiles('yogiben:favorites-tests.js');
});
