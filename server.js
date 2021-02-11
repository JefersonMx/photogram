var express = require('express');
var multer = require('multer');
var extension = require('file-extension');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './picuploads')
    },
    filename: function (req, file, cb) {
      cb(null, +Date.now() + '.' + extension(file.originalname))
    }
  })

var upload = multer({ storage: storage }).single('picture');

var app = express();

app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/', function(req, res){
    res.render('index', { title: 'Photogram'});
})
app.get('/signup', function(req, res){
    res.render('index');
})
app.get('/signin', function(req, res){
    res.render('index');
})
app.get('/api/pictures', function(req, res, next){
    var pictures =[
        {
          user: {
              username: 'Jeferson',
              avatar: 'https://cdn.discordapp.com/attachments/329445618026283008/805616282643988510/91fdc421f4e72b24962840e22f99871b.png',
          },
          url: 'https://cdn.discordapp.com/attachments/329445618026283008/805616282643988510/91fdc421f4e72b24962840e22f99871b.png',
          likes:0,
          liked: false,
          dateOfcreation: new Date().getTime()
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
            dateOfcreation: new Date().getTime()
          },
    ];
    setTimeout(function (){
        res.send(pictures);
    }, 2000)
});

app.post('/api/pictures', function (req, res) {
    upload(req, res, function (err) {
      if (err) {
        return res.send(500, "Error uploading file");
      }
      res.send('File uploaded');
    })
});

app.listen(3000, function(err) {
    if (err) return console.log('Sorry, error'), process.exit(1);

    console.log("Escuchando en el puerto 3000");
})