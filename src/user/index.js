import page from 'page'
import header from '../header'
import empty from 'empty-element'
import template from './template'
import axios from 'axios'

page('/:username', header, loadUser, (context, next) => {
   document.title = `Photogram - ${context.params.username}`;
   var main = document.getElementById('main-container');
   empty(main).appendChild	(template(context.user))
})


function loadUser(context, next){
   axios
     .get('/api/user/${context.params.username}')
     .then(function (response){
       context.user = response.data;
       next();
     })
     .catch(function (error){
       console.log(error)
     })
 }