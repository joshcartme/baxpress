
'use strict'

var $ = require('jQuery');

var Backbone = require('backbone');

(function(){

    window.App = {
        Models: {},
        Collections: {},
        Views: {},
        Router: {}
    };

    App.Router = Backbone.Router.extend({
        routes: {
            '': 'index',
            'help': 'help'
        },

        index: function(){
            $('.main').html("<h1>This is baxpress!</h1><a href='/help'>Help</a>");
        },
        help: function() {
            $('.main').html("<h2>You're on your own...</h2><a href='/'>Home</a>");
        }
    });

    var router = new App.Router;
    Backbone.history.start({pushState: true});

    var href;
    $('body').on('click', 'a', function(e){
        href = $(this).attr('href');
        if (href.startsWith('/') & !href.startsWith('/notspa/')) {
            e.preventDefault();
            router.navigate(href.replace(/^\//g, ''), {trigger: true});
        }
    });

})();
