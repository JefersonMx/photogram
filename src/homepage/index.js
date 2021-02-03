var page = require('page');
var empty = require('empty-element');
var template = require('./template');


page('/', (context, next) => {
    document.title = 'Photogram';
    var main = document.getElementById('main-container');
    var pictures =[
        {
          user: {
              username: 'Jeferson',
              avatar: 'https://cdn.discordapp.com/attachments/329445618026283008/805616282643988510/91fdc421f4e72b24962840e22f99871b.png',
          },
          url: 'https://cdn.discordapp.com/attachments/329445618026283008/805616282643988510/91fdc421f4e72b24962840e22f99871b.png',
          likes:0,
          liked: false,
          dateOfcreation: new Date()
        },
        {
            user: {
                username: 'Jair',
                avatar: 'https://images.unsplash.com/photo-1611756674996-fc1b1ed07c9b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
            },
            url: 'https://cdn.discordapp.com/attachments/329445618026283008/805614769628643348/Screenshot_20210109-120023.png',
            likes: 222,
            liked: true,
            dateOfcreation: new Date().setDate(new Date().getDate())
          },
          {
            user: {
                username: 'Andrés',
                avatar: 'https://images.unsplash.com/photo-1610767540673-4ae1befdb182?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
            },
            url: 'https://scontent-bog1-1.xx.fbcdn.net/v/t1.0-9/15442299_1092783377505879_3385059318414204374_n.jpg?_nc_cat=106&ccb=2&_nc_sid=174925&_nc_eui2=AeHMvdMdgtgBUVoPIuQZM-yL2PS4QYsjnwrY9LhBiyOfCulGqxoCTieHbxm8mYDWtUZflovtbkOV4nFXJrB9LPWz&_nc_ohc=LiGD_3T3N6oAX8TIbgW&_nc_ht=scontent-bog1-1.xx&oh=5c1735bd3213131a215836d7d729aa56&oe=603E4792',
            likes: 1,
            liked: true,
            dateOfcreation: new Date()
          },
    ];
    empty(main).appendChild(template(pictures));
})
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems);
  });