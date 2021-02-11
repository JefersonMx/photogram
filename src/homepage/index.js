var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var axios = require('axios').default;
var headerMidlew = require('../header');


page('/', headerMidlew, loadAxiosPictures, (context, next) => {
    document.title = 'Photogram';
    var main = document.getElementById('main-container');

    empty(main).appendChild(template(context.pictures));
})

function loadAxiosPictures(context, next){
  axios
    .get('/api/pictures')
    .then(function (response){
      context.pictures = response.data;
      next();
    })
    .catch(function (error){
      console.log(error)
    })
}
// async function asyncLoadPictures(context, next){
//   try{
//     context.pictures = await fetch('/api/pictures')
//     .then (response => response.json())
//     next()

//   }catch(error){
//     console.log(error);
//   }
// }

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems);
  });