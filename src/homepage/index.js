var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var request = require('superagent');
var headerMidlew = require('../header');


page('/', headerMidlew, loadPictures, (context, next) => {
    document.title = 'Photogram';
    var main = document.getElementById('main-container');

    empty(main).appendChild(template(context.pictures));
})

function loadPictures(context, next){
  request
    .get('/api/pictures')
    .end(function (err, res){
      if(err) return console.log(err);

      context.pictures = res.body;
      next();
    })
}

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems);
  });