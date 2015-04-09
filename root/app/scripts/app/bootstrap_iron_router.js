define(function (require) {

  var templateHome = require('spacebars!./home');
  var templateSub = require('spacebars!./sub');
  var layout = require('spacebars!./layout');

  var Iron = require('iron_router');

  /** @global */
  var Router = new Iron.Router();

  Router.configure({
    layoutTemplate: layout
  });

  Router.route('/', function () {
    this.render(templateHome, {
      data: {
        content: 'This is dynamic content on home.'
      }
    });

  }, {
    name: 'home'
  });

  Router.route('/sub', function () {
    this.render(templateSub);
  }, {
    name: 'sub'
  });

  Router.start();

  /*
   * Important for template helpers to find active Router
   */
  window.Router = Router;
});