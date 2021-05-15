var yo = require('yo-yo');

module.exports = function landing(box) {
    return yo`<div class="container">
        <div class="row landing">
            <div class="col s10 push-s1">
                <div class="row">
                    <div class="col m5 hide-on-small-only">
                        <img  class="iphone"src="https://i.imgur.com/BX9zv97.png" alt="iphone">
                    </div>
                ${box}
                </div>
            </div>
        </div>
    </div>`
}