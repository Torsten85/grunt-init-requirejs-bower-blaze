requirejs.config({
  baseUrl: 'scripts/app',

  paths: {{% if(blaze) { %}
    jquery: '../lib/jquery/dist/jquery',
    underscore: '../lib/underscore/underscore',
    blaze: '../lib/blaze/blaze'
  {% } %}},

  map: {{% if (blaze) { %}
    '*': {
      spacebars: '../lib/spacebars/spacebars'
    }
  {% } %}},

  shim: {
  },

  deps: ['bootstrap']
});