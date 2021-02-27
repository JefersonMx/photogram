var yo = require('yo-yo');
var layout = require('../layout');
var picture = require('../cards');
var translate = require('../translation');
var request = require('superagent');
var Webcam = require('webcamjs');
var picture = require('../cards');

module.exports = function (pictures) {
    var el = yo`<div class="container timeline">
            <div class="wrapper">
                <div id="modalcam" class="modal center-align">
                    <div class="modal-content">
                        <div id="my_camera" class="my_camera center-align" ></div>
                        <div id="my_result" class="hide center-align"></div>
                    </div>
                    <div class="modal-footer center-align">
                        <button class="waves-effect waves-light btn purple" id="shoot" onclick=${take_snapshot}> <i class="fas fa-camera"></i></button>
                        <button class="waves-effect waves-light btn hide" id="Upload"> <i class="fas fa-cloud-upload-alt"></i></button>
                        <button class="waves-effect waves-light btn red hide" id="Cancel"> <i class="fas fa-trash" onclick=${reset}></i></button>
                    </div>
                 </div>
                <div class="row">
                    <div class="col s12 m10 offset-m1 l8 offset-l2 center-align">
                        <form id="form-upload" enctype="multipart/form-data" class="form-upload" onsubmit=${onsubmit}>
                            <a class="waves-effect waves-light btn purple modal-trigger"  href="#modalcam" onclick=${triggerCam}>
                                 <i class="fas fa-camera "></i>${translate.message('Take-picture')}
                            </a>
                            <div id="fileName" class="fileUpload btn btn-flat teal">
                                <span><i class="fas fa-upload"></i>${translate.message('upload-picture')}</span>
                                <input name="picture" id="file" type="file" class="upload" onchange=${onchange}/>
                            </div>
                            <button id="btnUpload" type="submit" class="btn btn-flat cyan hide">${translate.message('upload')}</button>
                            <button id="btnCancel" type="button" class="btn btn-flat red hide" onclick=${cancel}><i class="fas fa-trash"></i></button>
                        </form>
                    </div>
                </div>
                <div class="row">
                    <div class="col s12 m10 offset-m1 l6 offset-l3" id="pic_card">
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
    function triggerCam(){
       Webcam.attach( '#my_camera' );
    }
    function take_snapshot() {
        Webcam.snap( function(data_uri) {
            document.getElementById('my_result').innerHTML = `<img src="${data_uri}"/>`;
            //Sacar en variables los elementos  html para mejor entendimiento
            document.getElementById('my_result').classList.remove('hide');
            document.getElementById('Upload').classList.remove('hide');
            document.getElementById('Cancel').classList.remove('hide');
            document.getElementById('my_camera').classList.add('hide');
            document.getElementById('shoot').classList.add('hide');

            document.getElementById('Upload').addEventListener("click", ()=>{
                const pic ={
                    url: data_uri,
                    likes: 0,
                    liked: 0,
                    dateOfcreation: +new Date(),
                    user: {
                        username: 'Andrew',
                        avatar: 'https://images.unsplash.com/photo-1612277832417-7f3146075560?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
                    },
                }
                document.getElementById('pic_card').appendChild(picture(pic));
                reset()
            })
        });
    }
    function reset(){
        document.getElementById('my_result').classList.add('hide');
        document.getElementById('Upload').classList.add('hide');
        document.getElementById('Cancel').classList.add('hide');
        document.getElementById('shoot').classList.remove('hide');
        document.getElementById('my_camera').classList.remove('hide');
        triggerCam();
    }
    return layout(el);
}
