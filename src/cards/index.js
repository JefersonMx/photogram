var yo = require('yo-yo');

module.exports = function pictureCard(pic) {
    var el;

     function render(picture){
        return yo`<div class="card ${picture.liked ? 'liked' : ''}">
            <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src="${picture.url}">
            </div>
            <div class="card-content">
                <a href="/user/${picture.user.username}" class="card-title">
                    <img src="${picture.user.avatar}" class="avatar"/>
                    <span class="username">${picture.user.username}</span>
                </a>
                <small class="right time">Hace 1 mes</small>
                <p>
                    <a class="left" href="#" onclick=${like.bind(null, true)}><i class="far fa-heart"></i></a>
                    <a class="left" href="#" onclick=${like.bind(null, false)}><i class="fas fa-heart"></i></a>
                    <span clasS="left likes">${picture.likes} likes</span>
                </p>
            </div>
        </div>`;
     }

    function like(liked){
        pic.liked = liked;
        pic.likes += liked ? 1 : -1;
        var newEle = render(pic);
        yo.update(el, newEle);
        return false;
    }
    el = render(pic);
    return el;
}