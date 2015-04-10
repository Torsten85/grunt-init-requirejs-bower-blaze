requirejs.config({
  baseUrl: '{% if(iron_router) { %}/{% } %}scripts/app',

  packages: [{% if(blaze) { %}
    {
      name: 'blaze',
      location: '../lib/blaze'
    }{% if(iron_router) { %},
    {
      name: 'iron',
      location: '../lib/iron'
    }{% } %}
  {% } %}],

  paths: {{% if(blaze) { %}
    jquery: '../lib/jquery/dist/jquery',
    underscore: '../lib/underscore/underscore',
    lib: '../lib'
  {% } %}},

  map: {{% if (blaze) { %}
    '*': {
      spacebars: 'lib/spacebars/spacebars'
    }
  {% } %}},

  shim: {
  },

  deps: ['bootstrap']
});