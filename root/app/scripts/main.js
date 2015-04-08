requirejs.config({
  baseUrl: '{% if(iron_router) { %}/{% } %}scripts/app',

  paths: {{% if(blaze) { %}
    jquery: '../lib/jquery/dist/jquery',
    underscore: '../lib/underscore/underscore',
    blaze: '../lib/blaze/blaze',
    lib: '../lib'{% if(iron_router) { %},
    iron_router: '../lib/iron_router/iron_router'{% } %}
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