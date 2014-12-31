
'use strict';

var spawn = require('child_process').spawn;


exports.description = 'RequireJS BowerJS Template';
exports.warnOn = '*';

exports.template = function (grunt, init, done) {

  init.process({}, [

    init.prompt('name'),
    init.prompt('description'),
    init.prompt('version'),
    init.prompt('author_name'),
    init.prompt('licenses'),

    {
      name: 'blaze',
      message: 'Include Blaze? (Awesome templating engine)',
      default: 'Y/n'
    }

  ], function (err, props) {

    props.blaze = /y/i.test(props.blaze);

    var files = init.filesToCopy(props);
    init.copyAndProcess(files, props);

    process.stdout.write('Executing npm install...');
      spawn('npm', ['install']).on('close', function () {
        console.log('\u001b[32mOK\u001b[39m');
        process.stdout.write('Executing bower install...');

        spawn('bower', ['install']).on('close', function () {
          console.log('\u001b[32mOK\u001b[39m');
          done();
        });
      });
  });

};