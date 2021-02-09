if(!window.Intl) {
    window.Intl = require('intl');
    require('intl/locale-data/jsonp/en-Us');
    require('intl/locale-data/jsonp/es');
}
var IntlRelativeFormat = window.IntlRelativeFormt = require('intl-relativeformat');
var IntlMessageFormat = require('intl-messageformat').default;


require('@formatjs/intl-relativetimeformat/locale-data/en');
require('@formatjs/intl-relativetimeformat/locale-data/es');


var es = require('./es');
var en = require('./en-US');

var MESSAGES ={};
MESSAGES.es = es;
MESSAGES['en-US'] = en;

var locale = localStorage.locale || 'es';

module.exports = {
    message: function (text, options = {}) {
        var msg = new IntlMessageFormat(MESSAGES[locale][text], locale, null);
        return msg.format(options);
    },
    date: new IntlRelativeFormat(locale)
}
