define(function (require) {

  var Blaze = require('blaze');
  var ReactiveVar = require('blaze/reactive-var');
  var template = require('spacebars!./template');

  var counter = new ReactiveVar(0);

  template.helpers({
    counter: function () {
      return counter.get();
    }
  });

  template.events({
    'click button': function () {
      counter.set(counter.get() + 1);
    }
  });

  Blaze.render(template, document.body);

});