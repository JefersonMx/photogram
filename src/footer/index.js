var yo = require('yo-yo');
var translate = require('../translation');

var el = yo `<footer class="site-footer">
    <div class="container">
        <div class="row">
        <div class="col s12 l3 center-align"><a class="dropdown-trigger btn btn-flat" href="#" data-target="dropdown1">${translate.message('language')}</a>
            <ul class="dropdown-content" id="dropdown1">
            <li><a href="#" onclick=${idiom.bind(null,'es')}>${translate.message('spanish')}</a></li>
            <li><a href="#" onclick=${idiom.bind(null,'en-US')}>${translate.message('english')}</a></li>
            </ul>
        </div>
        <div class="col s12 l3 push-l6 center-align">Copygrith 2021 Photogram™</div>
        </div>
        </div>
    </footer>`;

function idiom(locale) {
    localStorage.locale = locale;
    location.reload();
    return false;
}

document.body.appendChild(el);