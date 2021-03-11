var yo = require('yo-yo');
var translate = require('../translation');
var empty = require('empty-element');

var el = yo`<nav class="header">
<div class="nav-wrapper">
    <div class="container">
        <div clas="row">
        <div class="col s12 m6">
                <a href="/" class="brand-logo picter col s12 m6">Picter</a>
            </div>
            <div class="col s2 m6 push-s10 right-align">
                <a  class="dropdown-trigger btn btn-large btn-flat" href="#" data-target="dropdown-user">
                    <i class="fa fa-user"></i>
                </a>
                <ul id="dropdown-user" class="dropdown-content">
                    <li><a href="#!">${translate.message('logout')}</a></li>
                </ul>
            </div>
        </div>
    </div>
</div>
</nav>`;

module.exports = function headerMidlew(context, next) {
   var container = document.getElementById('header-container')
   empty(container).appendChild(el);
   next();
}
