var page = require('page');
var empty = require('empty-element');
var template = require('./template');


page('/', (context, next) => {
    document.title = 'Photogram';
    var main = document.getElementById('main-container');
    empty(main).appendChild(template);
})
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems);
  });