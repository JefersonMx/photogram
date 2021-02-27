var yo = require('yo-yo');
var translate = require('../translation');


module.exports = function pictureCard(pic) {
    var el;

     function render(picture){
        return yo`<div class="card ${picture.liked ? 'liked' : ''}">
            <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src="${picture.url}"  ondblclick=${like.bind(null,null, true)}/>
                <i class="fas fa-heart like-heart ${ picture.likedHeart ? 'liked': ''}"></i>
            </div>
            <div class="card-content">
                <a href="${picture.user.username}" class="card-title">
                    <img src="${picture.user.avatar}" class="avatar"/>
                    <span class="username">${picture.user.username}</span>
                </a>
                <small class="right time">${translate.date.format(picture.dateOfcreation)}</small>
                <p>
                    <a class="left" href="#" onclick=${like.bind(null, true)}><i class="far fa-heart"></i></a>
                    <a class="left" href="#" onclick=${like.bind(null, false)}><i class="fas fa-heart"></i></a>
                    <span clasS="left likes">${translate.message('likes', {likes : picture.likes})}</span>
                </p>
            </div>
        </div>`;
     }
    function like(liked, doubleClick){
        if (doubleClick){
            pic.likedHeart = pic.liked = !pic.liked;
            liked = pic.liked;
        }else {
            pic.liked = liked
        }
        pic.likes += liked ? 1 : -1;

        function updateRender(){
            var newEle = render(pic);
            yo.update(el, newEle);
        }
        updateRender();

        setTimeout(function(){
           pic.likedHeart = false;
           updateRender();
         }, 1200)
        return false;
    }
    el = render(pic);
    return el;
}

