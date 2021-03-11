var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var axios = require('axios').default;
var headerMidlew = require('../header');
const Webcam = require('webcamjs');


page('/', headerMidlew, loading, loadAxiosPictures, (context, next) => {
    document.title = 'Photogram';
    var main = document.getElementById('main-container');

    empty(main).appendChild(template(context.pictures));

    Webcam.set({
      width: 320,
      height: 240,
      image_format: 'jpeg',
      jpeg_quality: 90
    });

    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
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

function loading(context, next){
  var  loader =  document.createElement('div');
  loader.classList.add('loader');
  var main = document.getElementById('main-container').appendChild(loader);
  next()

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