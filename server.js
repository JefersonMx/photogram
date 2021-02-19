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
              username: 'Andrew',
              avatar: 'https://images.unsplash.com/photo-1612277832417-7f3146075560?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
          },
          url: 'https://images.unsplash.com/photo-1613402398192-8a354b291cf5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
          likes:0,
          liked: false,
          dateOfcreation: new Date().getTime()
        },
        {
            user: {
                username: 'Philip',
                avatar: 'https://images.unsplash.com/photo-1611756674996-fc1b1ed07c9b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
            },
            url: 'https://images.unsplash.com/photo-1589424690155-f91af53069e4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
            likes: 222,
            liked: true,
            dateOfcreation: new Date().setDate(new Date().getDate())
          },
          {
            user: {
                username: 'Jhonny',
                avatar: 'https://images.unsplash.com/photo-1612462767092-1246df528494?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=400&q=80',
            },
            url: 'https://images.unsplash.com/photo-1612693624285-6e52c9012148?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=400&q=80',
            likes: 1,
            liked: true,
            dateOfcreation: new Date().getTime()
          },
    ];
    setTimeout(()=> res.send(pictures), 2000)

  });

app.post('/api/pictures', function (req, res) {
    upload(req, res, function (err) {
      if (err) {
        return res.send(500, "Error uploading file");
      }
      res.send('File uploaded');
    })
});

app.get('/api/user/:usernam', function(req, res){
  const user = {
    username: "Andrew",
    avatar: "https://images.unsplash.com/photo-1612277832417-7f3146075560?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    pictures: [
      {
        id: 1,
        src: "https://images.unsplash.com/photo-1613055659399-722bb05dc34a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=747&q=80",
        likes: 3
      },
      {
        id: 2,
        src: "https://images.unsplash.com/photo-1613055532422-7392e55595ae?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=711&q=80",
        likes: 1
      },
      {
        id: 3,
        src: "https://images.unsplash.com/photo-1613055531991-f25ea2600da1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=747&q=80",
        likes: 10
      },
      {
        id: 4,
        src: "https://images.unsplash.com/photo-1613056342510-75a98eb3dbec?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=738&q=80",
        likes: 12
      },
      {
        id: 5,
        src: "https://images.unsplash.com/photo-1612983656730-465316d07420?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=715&q=80",
        likes: 12
      },
      {
        id: 6,
        src: "https://images.unsplash.com/photo-1612360314811-633b736f22cf?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=755&q=80",
        likes: 12
      },
    ]
  }
  res.send(user);
})

app.get('/:username', function(req, res){
  res.render('index');
});

app.listen(3000, function(err) {
    if (err) return console.log('Sorry, error'), process.exit(1);

    console.log("Escuchando en el puerto 3000");
})