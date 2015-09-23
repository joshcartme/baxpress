
'use strict'

var $ = require('jQuery');

var Backbone = require('backbone');

var AppView = Backbone.View.extend({
  render: function(){
    $('.main').append('<h1>Browserify is mathematical.</h1>');
  }
});

var appView = new AppView();
appView.render();

