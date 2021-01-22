var page = require('page');

const elems = document.querySelectorAll('.dropdown-trigger');
const instances = M.Dropdown.init(elems);

var main = document.getElementById('main-container');

page('/', (context, next) => {
    main.innerHTML = 'Home <a href="/signup">Signup</a>';
 })
page('/signup', (context, next) => {
    main.innerHTML = 'Signup <a href="/signin">Signin</a>';
})

page();