var yo = require('yo-yo');
var layout = require('../layout');
var picture = require('../cards');
var translate = require('../translation');
var request = require('superagent');

module.exports = function (pictures) {
    var el = yo`<div class="container timeline">
            <div class="wrapper">
                <div class="row">
                    <div class="col s12 m10 offset-m1 l8 offset-l2 center-align">
                        <form id="form-upload" enctype="multipart/form-data" class="form-upload" onsubmit=${onsubmit}>
                            <div id="fileName" class="fileUpload btn btn-flat teal">
                                <span><i class="fas fa-camera"></i>${translate.message('upload-picture')}</span>
                                <input name="picture" id="file" type="file" class="upload" onchange=${onchange}/>
                            </div>
                            <button id="btnUpload" type="submit" class="btn btn-flat cyan hide">${translate.message('upload')}</button>
                            <button id="btnCancel" type="button" class="btn btn-flat red hide" onclick=${cancel}><i class="fas fa-trash"></i></button>
                        </form>
                    </div>
                </div>
                <div class="row">
                    <div class="col s12 m10 offset-m1 l6 offset-l3">
                        ${pictures.map(function (pic) {
                        return picture(pic);
                    })}
                    </div>
                </div>
            </div>
        </div>`;

    function showButton() {
        document.getElementById('fileName').classList.toggle('hide');
        document.getElementById('btnUpload').classList.toggle('hide');
        document.getElementById('btnCancel').classList.toggle('hide');
    }
    function cancel() {
        showButton();
        document.getElementById('form-upload').reset();
    }
    function onchange() {
        showButton();
    }
    function onsubmit(ev) {
        ev.preventDefault();
        var data = new FormData(this);
        request
          .post('/api/pictures')
          .send(data)
          .end(function (err, res) {
            console.log(arguments);
          })
      }
    return layout(el);
}
