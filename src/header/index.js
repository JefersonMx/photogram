var yo = require('yo-yo');
var translate = require('../translation');
var empty = require('empty-element');

var authCard  = function (context) {

    var  authenticated = yo`
    <div class="col s2 m6 push-s10 right-align">
        <a  class="dropdown-trigger btn btn-large btn-flat" href="#" data-target="dropdown-user">
            <i class="fa fa-user"></i>
        </a>
        <ul id="dropdown-user" class="dropdown-content">
            <li><a href="/logout" rel="external" >${translate.message('logout')}</a></li>
        </ul>
    </div>`

    var signin = yo`
    <div class="col s2 m6 push-s10 right-align">
        <a href="/signin" class="btn btn-large btn-flat">
            ${translate.message('signin')}
        </a>
    </div>`

    if (context.auth) {
        return authenticated
    } else {
        return signin
    }
}

var renderHeader  = function (context){
    return yo`<nav class="header">
                <div class="nav-wrapper">
                    <div class="container">
                        <div clas="row">
                            <div class="col s12 m6">
                                <a href="/" class="brand-logo picter col s12 m6">Picter</a>
                            </div>
                            ${authCard(context)}
                        </div>
                    </div>
                </div>
               </nav>`;
}

module.exports = function headerMidlew(context, next) {
   var container = document.getElementById('header-container')
   empty(container).appendChild(renderHeader(context));
   next();
}
