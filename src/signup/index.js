var page = require('page');
var empty = require('empty-element');
var template = require('./template');


page('/signup', (context, next) => {
    document.title = 'Photogram - Signup';
    var main = document.getElementById('main-container');
    empty(main).appendChild(template);
})

