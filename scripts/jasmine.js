const Jasmine = require('jasmine');
const jasmine = new Jasmine();
const TSConsoleReporter = require('jasmine-ts-console-reporter');
require('jasmine-expect');

let jasmineReporter;
if (process.env.NODE_ENV === 'test') {
  // running on CircleCI
  const reporters = require('jasmine-reporters');
  jasmineReporter = new reporters.JUnitXmlReporter({
    savePath: __dirname + '/../junit/',
    consolidateAll: true
  });
  jasmine.addReporter(jasmineReporter);
} else {
  jasmineReporter = new TSConsoleReporter();
  jasmine.reporter = jasmineReporter;
  jasmine.addReporter(jasmineReporter);
}

jasmine.loadConfig({
  spec_files: [
    'dist/**/*[sS]pec.js'
  ],
  helpers: [
    'helpers/**/*.js',
    '../node_modules/jasmine-expect/index.js'
  ]
});

jasmine.execute();
