var yo = require('yo-yo');

var template = yo`<nav class="header">
    <div class="nav-wrapper">
        <div class="container">
            <div clas="row">
             <div class="col s12 m6">
                    <a href="/" class="brand-logo photogram col s12 m6">Photogram</a>
                </div>
                <div class="col s2 m6 push-m10 right-align">
                    <a  class="dropdown-trigger btn btn-large btn-flat" href="#" data-target="dropdown-user">
                        <i class="fa fa-user"></i>
                    </a>
                    <ul id="dropdown-user" class="dropdown-content">
                        <li><a href="#!">Sign out</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</nav>`;
module.exports = template;