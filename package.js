Package.describe({
  name: 'rollypolly:bootbar',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'bootbar notification wrapper for meteor ',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.use('jquery');
  api.addFiles('bootbar.js','client');
  api.addFiles('bootbar.css','client');
  api.export('bootbar','client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('rollypolly:bootbar');
  api.addFiles('bootbar-tests.js');
});
